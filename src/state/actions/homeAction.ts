import { Dispatch } from 'redux';

import { getWeatherFetch } from '../../services/home';
import { IGetWeatherParams } from '../../views/Home/models';
import { IActionDispatch } from '../models';
import { WEATHER_LOADING, WEATHER_SUCCESS, WEATHER_FAIL } from '../types/homeType';

export const getWeather = (params: IGetWeatherParams) => async (dispatch: Dispatch<IActionDispatch>) => {
  dispatch({
    type: WEATHER_LOADING
  });
  try {
    const response = await getWeatherFetch(params);
    dispatch({ type: WEATHER_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: WEATHER_FAIL, payload: error });
  }
};
