import { describe, expect, it, vi } from "bun:test";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import * as useWeatherModule from "@/hooks/useWeather";
import type { Weather } from "@/models";
import { Home } from "@/views/Home";

// Mock the hook
const useWeatherMock = vi.spyOn(useWeatherModule, "useWeather");

describe("Home View", () => {
	it("should render loading spinner when loading is true", () => {
		useWeatherMock.mockReturnValue({
			citiesList: [],
			weather: null,
			loading: true,
			error: null,
			handleCityChange: vi.fn(),
			cityCoordinates: null,
		});

		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
		);

		expect(screen.getByRole("progressbar")).toBeTruthy();
	});

	it("should render error message when error is present", () => {
		useWeatherMock.mockReturnValue({
			citiesList: [],
			weather: null,
			loading: false,
			error: "Error fetching weather",
			handleCityChange: vi.fn(),
			cityCoordinates: null,
		});

		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
		);

		expect(screen.getByText("¡Lo sentimos!")).toBeTruthy();
		expect(
			screen.getByText(
				"En este momento el servicio no se encuentra disponible",
			),
		).toBeTruthy();
	});

	it("should render weather cards when weather data is available", () => {
		const mockWeather = {
			daily: {
				time: ["2023-10-27", "2023-10-28"],
				temperature_2m_min: [10, 11],
				temperature_2m_max: [20, 22],
				apparent_temperature_mean: [15, 16],
				cloud_cover_mean: [50, 60],
				dew_point_2m_mean: [5, 6],
				precipitation_probability_mean: [10, 20],
				surface_pressure_mean: [1013, 1012],
				visibility_mean: [10000, 9000],
				wind_speed_10m_mean: [10, 12],
				uv_index_max: [5, 6],
				sunrise: ["2023-10-27T07:00", "2023-10-28T07:01"],
				sunset: ["2023-10-27T19:00", "2023-10-28T19:01"],
			},
			daily_units: {
				temperature_2m_min: "°C",
				temperature_2m_max: "°C",
			},
		} as unknown as Weather;

		useWeatherMock.mockReturnValue({
			citiesList: [{ description: "Madrid", value: { lat: 40, lon: -3 } }],
			weather: mockWeather,
			loading: false,
			error: null,
			handleCityChange: vi.fn(),
			cityCoordinates: { lat: 40, lon: -3 },
		});

		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
		);

		// Check if it renders the select
		expect(screen.getByRole("combobox")).toBeTruthy();

		// Check if it renders cards (we have 2 days in mockWeather)
		// One way is to check for dates or temperatures
		expect(screen.getAllByText(/°C/).length).toBeGreaterThan(0);
	});
});
