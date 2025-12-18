import { useEffect, useState } from "react";
import { cities as defaultCities } from "@/constants/cities";
import { useGeo } from "@/hooks/useGeo";
import type { City } from "@/models";
import { useWeatherStore } from "@/store/weatherStore";

export const useWeatherFetch = () => {
	const [citiesList, setCitiesList] = useState<City[]>(defaultCities);
	const { geolocation } = useGeo();
	const fetchWeather = useWeatherStore((state) => state.fetchWeather);
	const setCityCoordinates = useWeatherStore(
		(state) => state.setCityCoordinates,
	);
	const setLoading = useWeatherStore((state) => state.setLoading);
	const weather = useWeatherStore((state) => state.weather);
	const loading = useWeatherStore((state) => state.loading);
	const error = useWeatherStore((state) => state.error);

	const cityCoordinates = useWeatherStore((state) => state.cityCoordinates);

	useEffect(() => {
		setLoading(true);
	}, [setLoading]);

	useEffect(() => {
		if (geolocation.error !== null) {
			if (
				geolocation.error === false &&
				geolocation.latitude &&
				geolocation.longitude
			) {
				const currentCity: City = {
					description: "Ubicación actual",
					value: { lat: geolocation.latitude, lon: geolocation.longitude },
				};
				setCitiesList([currentCity, ...defaultCities]);
				setCityCoordinates(currentCity.value);
				fetchWeather(currentCity.value);
			} else {
				const defaultCity = defaultCities[0];
				if (defaultCity) {
					setCityCoordinates(defaultCity.value);
					fetchWeather(defaultCity.value);
				}
			}
		}
	}, [geolocation, fetchWeather, setCityCoordinates]);

	const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const coords = JSON.parse(e.target.value);
		setCityCoordinates(coords);
		fetchWeather(coords);
	};

	return {
		citiesList,
		weather,
		loading,
		error,
		handleCityChange,
		cityCoordinates,
	};
};
