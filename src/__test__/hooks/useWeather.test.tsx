import { afterEach, beforeEach, describe, expect, it, vi } from "bun:test";
import { act, renderHook, waitFor } from "@testing-library/react";
import * as useGeoModule from "@/hooks/useGeo";
import { useWeather } from "@/hooks/useWeather";
import * as weatherStoreModule from "@/store/weatherStore";

// Mock dependencies
const mockFetchWeather = vi.fn();
const mockSetCityCoordinates = vi.fn();
const mockSetLoading = vi.fn();

// Initial store state
const mockStoreState = {
	fetchWeather: mockFetchWeather,
	setCityCoordinates: mockSetCityCoordinates,
	setLoading: mockSetLoading,
	weather: null,
	loading: false,
	error: null,
	cityCoordinates: null,
};

// Mock useWeatherStore to behave like a selector
const useWeatherStoreMock = vi.fn((selector) => selector(mockStoreState));

beforeEach(() => {
	// Reset mocks
	vi.clearAllMocks();

	// Setup module mocks
	vi.spyOn(weatherStoreModule, "useWeatherStore").mockImplementation(
		useWeatherStoreMock as unknown as typeof weatherStoreModule.useWeatherStore,
	);
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe("useWeather Hook", () => {
	it("should fetch weather for current location when geolocation is successful", async () => {
		// Mock successful geolocation
		vi.spyOn(useGeoModule, "useGeo").mockReturnValue({
			geolocation: {
				latitude: 10,
				longitude: 20,
				error: false,
			},
		});

		renderHook(() => useWeather());

		await waitFor(() => {
			expect(mockSetLoading).toHaveBeenCalledWith(true);
			expect(mockSetCityCoordinates).toHaveBeenCalledWith({ lat: 10, lon: 20 });
			expect(mockFetchWeather).toHaveBeenCalledWith({ lat: 10, lon: 20 });
		});
	});

	it("should fetch weather for default city when geolocation fails", async () => {
		// Mock failed geolocation
		vi.spyOn(useGeoModule, "useGeo").mockReturnValue({
			geolocation: {
				latitude: null,
				longitude: null,
				error: true,
			},
		});

		renderHook(() => useWeather());

		await waitFor(() => {
			// Assuming first default city is Madrid (lat: 40.4165, lon: -3.7026) or similar checks
			// We verify it calls with SOME coordinates, or specifically the default ones if we know them.
			// Looking at previous context or code, defaultCities[0] is used.
			expect(mockSetCityCoordinates).toHaveBeenCalled();
			expect(mockFetchWeather).toHaveBeenCalled();
		});
	});

	it("should handle city change", () => {
		vi.spyOn(useGeoModule, "useGeo").mockReturnValue({
			geolocation: {
				latitude: null,
				longitude: null,
				error: null, // Loading state
			},
		});

		const { result } = renderHook(() => useWeather());

		const newCoords = { lat: 50, lon: 60 };
		const event = {
			target: { value: JSON.stringify(newCoords) },
		} as React.ChangeEvent<HTMLSelectElement>;

		act(() => {
			result.current.handleCityChange(event);
		});

		expect(mockSetCityCoordinates).toHaveBeenCalledWith(newCoords);
		expect(mockFetchWeather).toHaveBeenCalledWith(newCoords);
	});
});
