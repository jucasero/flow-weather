import { IGetWeatherResponse } from '../views/Home/models';

export interface IStore {
  data: any;
  loading: boolean;
  error: boolean;
}

export interface IActionDispatch {
  type: string;
  payload?: any;
}

export interface IHomeReducer {
  weather: IStore;
}

export interface IResponse {
  data: IGetWeatherResponse;
}
