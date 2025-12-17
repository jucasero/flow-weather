import { useCallback, useEffect } from "react";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import { Message, Select, Spinner } from "@/components/common";
import { Card } from "@/components/common/Card";
import { Footer, Header } from "@/components/layout";
import { useGeo } from "@/hooks/useGeo";
import type { City, DailyUnits } from "@/models";
import { useWeatherStore } from "@/store/weatherStore";
import styles from "./styles.module.css";

const cities: City[] = [
	{ description: "Bogotá", value: { lat: 4.601874, lon: -74.071648 } },
	{ description: "New York", value: { lat: 40.712776, lon: -74.005974 } },
	{ description: "Sydney", value: { lat: -33.856721, lon: 151.21525 } },
	{ description: "Estocolmo", value: { lat: 59.329184, lon: 18.090643 } },
	{ description: "Cairo", value: { lat: 30.031534, lon: 31.254341 } },
];

export const Home: React.FC = () => {
	const weather = useWeatherStore((state) => state.weather);
	const loading = useWeatherStore((state) => state.loading);
	const error = useWeatherStore((state) => state.error);
	const cityCoordinates = useWeatherStore((state) => state.cityCoordinates);
	const setCityCoordinates = useWeatherStore(
		(state) => state.setCityCoordinates,
	);
	const fetchWeather = useWeatherStore((state) => state.fetchWeather);
	const { geolocation } = useGeo();

	const formatCardInfo = useCallback(
		(key: keyof DailyUnits, index: number) => {
			if (weather?.daily_units[key]) {
				return `${weather.daily[key][index]} ${weather.daily_units[key]}`;
			}
			return "-";
		},
		[weather],
	);

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
		<main className={styles.main}>
			<Header title="Flow Weather" />
			<section className={styles.content}>
				{loading ? (
					<div className={styles.loader}>
						<Spinner />
					</div>
				) : error ? (
					<Message
						title="¡Lo sentimos!"
						description="En este momento el servicio no se encuentra disponible"
					/>
				) : (
					<section>
						<div>
							<Select
								data={cities}
								handleChange={(e) => {
									setCityCoordinates(JSON.parse(e.target.value));
								}}
							/>
						</div>
						{weather &&
							Array.from(
								{ length: weather?.daily.time.length || 0 },
								(_, index) => (
									<Card
										key={Math.random()}
										date={weather.daily.time[index]?.toString()}
										minTempeture={formatCardInfo("temperature_2m_min", index)}
										maxTempeture={formatCardInfo("temperature_2m_max", index)}
										apparentTemperature={formatCardInfo(
											"apparent_temperature_mean",
											index,
										)}
										cloudCover={formatCardInfo("cloud_cover_mean", index)}
										dewPoint={formatCardInfo("dew_point_2m_mean", index)}
										precipitationProbability={formatCardInfo(
											"precipitation_probability_mean",
											index,
										)}
										surfacePressure={formatCardInfo(
											"surface_pressure_mean",
											index,
										)}
										visibility={formatCardInfo("visibility_mean", index)}
										windSpeed={formatCardInfo("wind_speed_10m_mean", index)}
										uvi={formatCardInfo("uv_index_max", index)}
										sunrise={weather.daily.sunrise[index]?.slice(-5)}
										sunset={weather.daily.sunset[index]?.slice(-5)}
									/>
								),
							)}
					</section>
				)}
			</section>
			<Footer
				githubIcon={githubIcon}
				linkedinIcon={linkedinIcon}
				githubLink="https://github.com/jucasero"
				linkedinLink="https://www.linkedin.com/in/jucasero"
				githubText="@jucasero"
				linkedinText="@jucasero"
			/>
		</main>
	);
};
