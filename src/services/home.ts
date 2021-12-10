import axios from 'axios';
import { IResponse } from '../state/models';
import { IGetWeatherParams } from '../views/Home/models';

const BASE_URL = 'https://api.openweathermap.org';

export const getWeatherFetch = (params: IGetWeatherParams): Promise<IResponse> =>
  axios.get(`${BASE_URL}/data/2.5/onecall`, { params: params });
