export interface Weather {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_units: CurrentUnits;
	current: Current;
	daily_units: DailyUnits;
	daily: Daily;
}

export interface Current {
	time: string;
	interval: number;
	temperature_2m: number;
	precipitation: number;
	apparent_temperature: number;
	cloud_cover: number;
	relative_humidity_2m: number;
	rain: number;
	surface_pressure: number;
	wind_speed_10m: number;
}

export interface CurrentUnits {
	time: string;
	interval: string;
	temperature_2m: string;
	precipitation: string;
	apparent_temperature: string;
	cloud_cover: string;
	relative_humidity_2m: string;
	rain: string;
	surface_pressure: string;
	wind_speed_10m: string;
}

export interface Daily {
	time: Date[];
	sunrise: string[];
	sunset: string[];
	uv_index_max: number[];
	rain_sum: number[];
	precipitation_probability_max: number[];
	relative_humidity_2m_mean: number[];
	cloud_cover_mean: number[];
	wind_speed_10m_mean: number[];
	surface_pressure_mean: number[];
	dew_point_2m_mean: number[];
	visibility_mean: number[];
}

export interface DailyUnits {
	time: string;
	sunrise: string;
	sunset: string;
	uv_index_max: string;
	rain_sum: string;
	precipitation_probability_max: string;
	relative_humidity_2m_mean: string;
	cloud_cover_mean: string;
	wind_speed_10m_mean: string;
	surface_pressure_mean: string;
	dew_point_2m_mean: string;
	visibility_mean: string;
}
