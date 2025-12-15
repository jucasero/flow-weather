import { useEffect } from "react";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import { Select } from "@/components/common";
import { Footer, Header } from "@/components/layout";
import { useGeo } from "@/hooks/useGeo";
import type { City } from "@/models";
import { useWeatherStore } from "@/state/weatherStore";
import styles from "./styles.module.css";

const cities: City[] = [
	{ description: "Bogotá", value: { lat: 4.601874, lon: -74.071648 } },
	{ description: "New York", value: { lat: 40.712776, lon: -74.005974 } },
	{ description: "Sydney", value: { lat: -33.856721, lon: 151.21525 } },
	{ description: "Estocolmo", value: { lat: 59.329184, lon: 18.090643 } },
	{ description: "Cairo", value: { lat: 30.031534, lon: 31.254341 } },
];

export const Home: React.FC = () => {
	const cityCoordinates = useWeatherStore((state) => state.cityCoordinates);
	const setCityCoordinates = useWeatherStore(
		(state) => state.setCityCoordinates,
	);
	const fetchWeather = useWeatherStore((state) => state.fetchWeather);
	const { geolocation } = useGeo();

	useEffect(() => {
		if (geolocation.error !== null) {
			if (geolocation.latitude && geolocation.longitude) {
				cities.unshift({
					description: "Ubicación actual",
					value: { lat: geolocation.latitude, lon: geolocation.longitude },
				});
				setCityCoordinates({
					lat: geolocation.latitude,
					lon: geolocation.longitude,
				});
			}
		}
	}, [geolocation, setCityCoordinates]);

	useEffect(() => {
		if (cities[0]) {
			const coordinates = cityCoordinates || cities[0].value;
			fetchWeather(coordinates);
		}
	}, [fetchWeather, cityCoordinates]);

	return (
		<>
			<Header title="Flow Weather" />
			<main className={styles.main}>
				<Select
					data={cities}
					handleChange={(e) => {
						setCityCoordinates(JSON.parse(e.target.value));
					}}
				/>
			</main>
			<Footer
				githubIcon={githubIcon}
				linkedinIcon={linkedinIcon}
				githubLink="https://github.com/jucasero"
				linkedinLink="https://www.linkedin.com/in/jucasero"
				githubText="@jucasero"
				linkedinText="@jucasero"
			/>
		</>
	);
};
