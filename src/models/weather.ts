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
	wind_speed_10m: number;
	apparent_temperature: number;
	is_day: number;
	cloud_cover: number;
	surface_pressure: number;
}

export interface CurrentUnits {
	time: string;
	interval: string;
	temperature_2m: string;
	precipitation: string;
	wind_speed_10m: string;
	apparent_temperature: string;
	is_day: string;
	cloud_cover: string;
	surface_pressure: string;
}

export interface Daily {
	time: Date[];
	sunrise: string[];
	sunset: string[];
	uv_index_max: number[];
}

export interface DailyUnits {
	time: string;
	sunrise: string;
	sunset: string;
	uv_index_max: string;
}
