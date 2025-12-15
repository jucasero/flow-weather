import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { Coordinates, Weather } from "@/models";
import { getWeather } from "@/services/weather";

interface WeatherStore {
	cityCoordinates: Coordinates | null;
	weather: Weather | null;
	loading: boolean;
	error: string | null;
}

const initialState: WeatherStore = {
	cityCoordinates: null,
	weather: null,
	loading: false,
	error: null,
};

export const useWeatherStore = create(
	combine(initialState, (set) => ({
		setCityCoordinates: (cityCoordinates: Coordinates) =>
			set({ cityCoordinates }),
		fetchWeather: (cityCoordinates: Coordinates) => {
			set({ loading: true });
			getWeather(cityCoordinates)
				.then((weather) => set({ weather }))
				.catch((error) => set({ error: error?.message || String(error) }))
				.finally(() => set({ loading: false }));
		},
	})),
);
