import { RowCardDescription } from "./RowCardDescription";
import styles from "./styles.module.css";

interface CardProps {
	date?: string;
	minTempeture?: string;
	maxTempeture?: string;
	apparentTemperature?: string;
	cloudCover?: string;
	dewPoint?: string;
	precipitationProbability?: string;
	surfacePressure?: string;
	visibility?: string;
	windSpeed?: string;
	uvi?: string;
	sunrise?: string;
	sunset?: string;
}

export const Card: React.FC<CardProps> = ({
	date = "-",
	minTempeture = "-",
	maxTempeture = "-",
	apparentTemperature = "-",
	cloudCover = "-",
	dewPoint = "-",
	precipitationProbability = "-",
	surfacePressure = "-",
	visibility = "-",
	windSpeed = "-",
	uvi = "-",
	sunrise = "-",
	sunset = "-",
}) => {
	const setCardTitle = () => {
		const days = [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado",
		];
		const millisecondsDate = new Date(date);
		return days[millisecondsDate.getDay()];
	};

	return (
		<div className={styles.card}>
			<div className={styles.rowTitle}>
				<h2>{setCardTitle()}</h2>
			</div>
			<RowCardDescription
				firstSubtitle="Temperatura mínima"
				firstDescription={minTempeture}
				secondSubtitle="Temperatura máxima"
				secodDescription={maxTempeture}
			/>
			<RowCardDescription
				firstSubtitle="Sensación"
				firstDescription={apparentTemperature}
				secondSubtitle="Nubosidad"
				secodDescription={cloudCover}
			/>
			<RowCardDescription
				firstSubtitle="Probabilidad de lluvia"
				firstDescription={precipitationProbability}
				secondSubtitle="Presión"
				secodDescription={surfacePressure}
			/>
			<RowCardDescription
				firstSubtitle="Punto de rocío"
				firstDescription={dewPoint}
				secondSubtitle="Presión"
				secodDescription={surfacePressure}
			/>
			<RowCardDescription
				firstSubtitle="Presión"
				firstDescription={surfacePressure}
				secondSubtitle="Visibilidad"
				secodDescription={visibility}
			/>
			<RowCardDescription
				firstSubtitle="Velocidad del viento"
				firstDescription={windSpeed}
				secondSubtitle="Índice UV"
				secodDescription={uvi}
			/>
			<RowCardDescription
				firstSubtitle="Amanecer"
				firstDescription={sunrise}
				secondSubtitle="Atardecer"
				secodDescription={sunset}
			/>
		</div>
	);
};
