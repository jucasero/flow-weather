export interface IGetWeatherParams {
  lat: number;
  lon: number;
  exclude?: string;
  units?: string;
  lang?: string;
  appid: string;
}

export interface IGetWeatherResponse {
  current: ICurrent;
  daily: IDaily[];
}

export interface ICurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  weather: IWeather[];
}

export interface IDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: IDailyTemp;
  feels_like: IDailyTemp;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  weather: IWeather[];
  pop: number;
}

export interface IDailyTemp {
  day: number;
}

export interface IWeather {
  description: string;
  icon: string;
}

export interface ICity {
  description: string;
  value: ICoordinates;
}

export interface ICoordinates {
  lat: number;
  lon: number;
}
