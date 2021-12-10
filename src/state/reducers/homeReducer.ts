import { IActionDispatch, IHomeReducer } from '../models';
import { WEATHER_LOADING, WEATHER_SUCCESS, WEATHER_FAIL } from '../types/homeType';

const initialState: IHomeReducer = {
  weather: {
    data: {},
    loading: false,
    error: false
  }
};

export const homeReducer = (state = initialState, action: IActionDispatch) => {
  switch (action.type) {
    case WEATHER_LOADING:
      return { ...state, weather: { ...state.weather, loading: true } };
    case WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          ...state.weather,
          data: action.payload,
          error: false,
          loading: false
        }
      };
    case WEATHER_FAIL:
      return {
        ...state,
        weather: {
          ...state.weather,
          data: action.payload,
          error: true,
          loading: false
        }
      };
    default:
      return state;
  }
};
