import { afterEach, beforeEach, describe, expect, it, vi } from "bun:test";
import type { Weather } from "@/models";
import * as weatherService from "@/services/weather";
import { useWeatherStore } from "@/store/weatherStore";

// Helper to wait for a condition in the store
const waitForStoreState = (
	predicate: (state: ReturnType<typeof useWeatherStore.getState>) => boolean,
) => {
	return new Promise<void>((resolve) => {
		const check = () => {
			if (predicate(useWeatherStore.getState())) {
				resolve();
			} else {
				setTimeout(check, 10);
			}
		};
		check();
	});
};

beforeEach(() => {
	// Reset store state before each test
	useWeatherStore.setState({
		cityCoordinates: null,
		weather: null,
		loading: false,
		error: null,
	});
	vi.clearAllMocks();
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe("Weather Store", () => {
	it("should have initial state", () => {
		const state = useWeatherStore.getState();
		expect(state.cityCoordinates).toBeNull();
		expect(state.weather).toBeNull();
		expect(state.loading).toBe(false);
		expect(state.error).toBeNull();
	});

	it("should update loading state", () => {
		useWeatherStore.getState().setLoading(true);
		expect(useWeatherStore.getState().loading).toBe(true);

		useWeatherStore.getState().setLoading(false);
		expect(useWeatherStore.getState().loading).toBe(false);
	});

	it("should update city coordinates", () => {
		const coords = { lat: 40, lon: -3 };
		useWeatherStore.getState().setCityCoordinates(coords);
		expect(useWeatherStore.getState().cityCoordinates).toEqual(coords);
	});

	it("should fetch weather successfully", async () => {
		const mockWeather = {
			latitude: 40,
			longitude: -3,
			daily: {
				time: ["2024-01-01"],
				temperature_2m_min: [10],
				temperature_2m_max: [20],
			},
		} as unknown as Weather;
		const coords = { lat: 40, lon: -3 };

		const getWeatherSpy = vi
			.spyOn(weatherService, "getWeather")
			.mockResolvedValue(mockWeather);

		useWeatherStore.getState().fetchWeather(coords);

		expect(useWeatherStore.getState().loading).toBe(true);
		expect(getWeatherSpy).toHaveBeenCalledWith(coords);

		// Wait for the async process to complete (loading becomes false)
		await waitForStoreState((state) => !state.loading);

		expect(useWeatherStore.getState().weather).toEqual(mockWeather);
		expect(useWeatherStore.getState().error).toBeNull();
		expect(useWeatherStore.getState().loading).toBe(false);
	});

	it("should handle fetch weather error", async () => {
		const coords = { lat: 40, lon: -3 };
		const errorMessage = "Failed to fetch weather";

		vi.spyOn(weatherService, "getWeather").mockRejectedValue(
			new Error(errorMessage),
		);

		useWeatherStore.getState().fetchWeather(coords);

		expect(useWeatherStore.getState().loading).toBe(true);

		// Wait for the async process to complete (loading becomes false)
		await waitForStoreState((state) => !state.loading);

		expect(useWeatherStore.getState().error).toBe(errorMessage);
		expect(useWeatherStore.getState().weather).toBeNull();
		expect(useWeatherStore.getState().loading).toBe(false);
	});
});
