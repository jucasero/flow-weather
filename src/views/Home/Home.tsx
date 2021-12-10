import { useEffect, useState } from 'react';

import { ICurrent, IGetWeatherParams } from './models';
import { Header, Footer } from '../../components/layout';
import { IHomeReducer } from '../../state/models';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import { Card, Spinner } from '../../components/common';

interface IHomeProps {
  getWeather(params: IGetWeatherParams): void;
  store: IHomeReducer;
}

export const HomeComponent: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { getWeather, store } = props;
  const [loader, setLoader] = useState(true);
  const current: ICurrent = store.weather.data.current;

  useEffect(() => {
    getWeather({
      lat: 4.601874,
      lon: -74.071648,
      exclude: 'minutely,hourly,alerts',
      units: 'metric',
      lang: 'es',
      appid: '4876cc236ffcabea6a6aad9960a7ea32'
    });
  }, []);

  useEffect(() => {
    if (!store.weather.loading && Object.keys(store.weather.data).length) {
      setLoader(false);
    }
  }, [store.weather.loading]);

  return (
    <>
      <Header title='Flow Weather' />
      <main>
        {loader ? (
          <Spinner />
        ) : (
          <Card
            date={'Hoy'}
            dayWeatherDescripton={current.weather[0].description}
            icon={current.weather[0].icon}
            tempeture={current.temp}
            feelsLike={current.feels_like}
            humidity={current.humidity}
            clouds={current.clouds}
            pressure={current.pressure}
            windSpeed={current.wind_speed}
            uvi={current.uvi}
            dewPoint={current.dew_point}
            visibility={current.visibility}
            sunrise={current.sunrise}
            sunset={current.sunset}
          />
        )}
      </main>
      <Footer
        githubIcon={githubIcon}
        linkedinIcon={linkedinIcon}
        githubLink='https://github.com/jucasero'
        linkedinLink='https://www.linkedin.com/in/jucasero'
        githubText='@jucasero'
        linkedinText='@jucasero'
      />
    </>
  );
};
