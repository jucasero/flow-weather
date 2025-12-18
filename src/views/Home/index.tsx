import { useCallback } from "react";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import { Message, Select, Spinner } from "@/components/common";
import { Card } from "@/components/common/Card";
import { Footer, Header } from "@/components/layout";
import { useWeather } from "@/hooks/useWeather";
import type { DailyUnits } from "@/models";
import styles from "./styles.module.css";

export const Home: React.FC = () => {
	const {
		citiesList,
		weather,
		loading,
		error,
		handleCityChange,
		cityCoordinates,
	} = useWeather();

	const formatCardInfo = useCallback(
		(key: keyof DailyUnits, index: number) => {
			if (weather?.daily_units[key]) {
				return `${weather.daily[key][index]} ${weather.daily_units[key]}`;
			}
			return "-";
		},
		[weather],
	);

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
								data={citiesList}
								handleChange={handleCityChange}
								value={JSON.stringify(cityCoordinates)}
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
