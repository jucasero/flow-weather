import type { Coordinates } from "@/models/home";
import type { Weather } from "@/models/weather";

export const getWeather = async (
	cityCoordinates: Coordinates,
): Promise<Weather | null> => {
	try {
		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${cityCoordinates.lat}&longitude=${cityCoordinates.lon}&daily=temperature_2m_min,temperature_2m_max,apparent_temperature_mean,cloud_cover_mean,dew_point_2m_mean,precipitation_probability_mean,surface_pressure_mean,visibility_mean,wind_speed_10m_mean,sunrise,sunset,uv_index_max`,
		);
		const data = (await response.json()) as Weather;
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
