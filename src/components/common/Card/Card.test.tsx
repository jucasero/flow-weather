import { render } from '@testing-library/react';

import { Card } from './Card';

describe('<Card />', () => {
  test('renders component', () => {
    const cardCurrentDataMock = {
      dt: 1639357616,
      sunrise: 1639298101,
      sunset: 1639350068,
      temp: 24.36,
      feels_like: 24.81,
      pressure: 1007,
      humidity: 75,
      dew_point: 19.64,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.03,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ]
    };
    const component = render(
      <Card
        date={'hoy'}
        dayWeatherDescripton={cardCurrentDataMock.weather[0].description}
        icon={cardCurrentDataMock.weather[0].icon}
        tempeture={cardCurrentDataMock.temp}
        feelsLike={cardCurrentDataMock.feels_like}
        humidity={cardCurrentDataMock.humidity}
        clouds={cardCurrentDataMock.clouds}
        pressure={cardCurrentDataMock.pressure}
        windSpeed={cardCurrentDataMock.wind_speed}
        uvi={cardCurrentDataMock.uvi}
        dewPoint={cardCurrentDataMock.dew_point}
        visibility={cardCurrentDataMock.visibility}
        sunrise={cardCurrentDataMock.sunrise}
        sunset={cardCurrentDataMock.sunset}
      />
    );
    component.getByText('Nubosidad');
  });

  test('card with presipitation probability', () => {
    const cardDayDataMock = {
      dt: 1639321200,
      sunrise: 1639298101,
      sunset: 1639350068,
      moonrise: 1639329180,
      moonset: 1639285020,
      moon_phase: 0.3,
      temp: {
        day: 30.92,
        min: 21.2,
        max: 30.92,
        night: 23.79,
        eve: 24.73,
        morn: 21.43
      },
      feels_like: {
        day: 30.05,
        night: 24.24,
        eve: 24.93,
        morn: 21.2
      },
      pressure: 1003,
      humidity: 34,
      dew_point: 13.22,
      wind_speed: 6.21,
      wind_deg: 224,
      wind_gust: 10.75,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10d'
        }
      ],
      clouds: 85,
      pop: 0.72,
      rain: 1.65,
      uvi: 8.5
    };
    const component = render(
      <Card
        date={cardDayDataMock.dt}
        dayWeatherDescripton={cardDayDataMock.weather[0].description}
        icon={cardDayDataMock.weather[0].icon}
        tempeture={cardDayDataMock.temp.day}
        feelsLike={cardDayDataMock.feels_like.day}
        humidity={cardDayDataMock.humidity}
        rainPosibility={cardDayDataMock.pop}
        pressure={cardDayDataMock.pressure}
        windSpeed={cardDayDataMock.wind_speed}
        uvi={cardDayDataMock.uvi}
        dewPoint={cardDayDataMock.dew_point}
        visibility={10000}
        sunrise={cardDayDataMock.sunrise}
        sunset={cardDayDataMock.sunset}
      />
    );
    component.getByText('Probabilidad de lluvia');
  });
});
