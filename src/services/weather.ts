import type { Weather } from "@/models/weather";

export const getWeather = async (): Promise<Weather | null> => {
	try {
		const response = await fetch(
			"https://api.open-meteo.com/v1/forecast?latitude=40.5475&longitude=-3.642&daily=sunrise,sunset,uv_index_max&current=temperature_2m,precipitation,wind_speed_10m,apparent_temperature,is_day,cloud_cover,surface_pressure",
		);
		const data = (await response.json()) as Weather;
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
