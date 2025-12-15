import type { Weather } from "@/models/weather";
import type { Coordinates } from "@/models/home";

export const getWeather = async (
	cityCoordinates: Coordinates,
): Promise<Weather | null> => {
	try {
		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${cityCoordinates.lat}&longitude=${cityCoordinates.lon}&daily=sunrise,sunset,uv_index_max,rain_sum,precipitation_probability_max,relative_humidity_2m_mean,cloud_cover_mean,wind_speed_10m_mean,surface_pressure_mean,dew_point_2m_mean,visibility_mean&current=temperature_2m,precipitation,apparent_temperature,cloud_cover,relative_humidity_2m,rain,surface_pressure,wind_speed_10m`,
		);
		const data = (await response.json()) as Weather;
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
