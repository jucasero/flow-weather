export interface Weather {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	daily_units: DailyUnits;
	daily: Daily;
}

export interface Daily {
	time: Date[];
	temperature_2m_min: number[];
	temperature_2m_max: number[];
	apparent_temperature_mean: number[];
	cloud_cover_mean: number[];
	dew_point_2m_mean: number[];
	precipitation_probability_mean: number[];
	surface_pressure_mean: number[];
	visibility_mean: number[];
	wind_speed_10m_mean: number[];
	sunrise: string[];
	sunset: string[];
	uv_index_max: number[];
}

export interface DailyUnits {
	time: string;
	temperature_2m_min: string;
	temperature_2m_max: string;
	apparent_temperature_mean: string;
	cloud_cover_mean: string;
	dew_point_2m_mean: string;
	precipitation_probability_mean: string;
	surface_pressure_mean: string;
	visibility_mean: string;
	wind_speed_10m_mean: string;
	sunrise: string;
	sunset: string;
	uv_index_max: string;
}
