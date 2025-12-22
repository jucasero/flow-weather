import { afterEach, beforeEach, describe, expect, it, vi } from "bun:test";
import type { Weather } from "@/models";
import { getWeather } from "@/services/weather";

beforeEach(() => {
	vi.clearAllMocks();
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe("Weather Service", () => {
	it("should return weather data on successful fetch", async () => {
		const mockData = {
			latitude: 40.7128,
			longitude: -74.006,
			daily: {
				time: ["2023-10-27"],
				temperature_2m_min: [10],
				temperature_2m_max: [20],
			},
		} as unknown as Weather;

		// Mock global fetch
		global.fetch = vi.fn().mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockData),
			}),
		) as unknown as typeof global.fetch;

		const coords = { lat: 40.7128, lon: -74.006 };
		const result = await getWeather(coords);

		expect(result).toEqual(mockData);
		expect(global.fetch).toHaveBeenCalledWith(
			expect.stringContaining("latitude=40.7128"),
		);
		expect(global.fetch).toHaveBeenCalledWith(
			expect.stringContaining("longitude=-74.006"),
		);
	});

	it("should return null when fetch fails", async () => {
		// Mock global fetch to throw
		global.fetch = vi
			.fn()
			.mockImplementation(() =>
				Promise.reject(new Error("Network Error")),
			) as unknown as typeof global.fetch;

		// Mock console.error to avoid cluttering test output
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

		const coords = { lat: 0, lon: 0 };
		const result = await getWeather(coords);

		expect(result).toBeNull();
		expect(consoleSpy).toHaveBeenCalled();
	});

	it("should return null when response.json fails", async () => {
		global.fetch = vi.fn().mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.reject(new Error("JSON parsing error")),
			}),
		) as unknown as typeof global.fetch;

		vi.spyOn(console, "error").mockImplementation(() => {});

		const coords = { lat: 0, lon: 0 };
		const result = await getWeather(coords);

		expect(result).toBeNull();
	});
});
