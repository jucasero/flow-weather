import { useEffect, useState } from 'react';

import { Card, Message, Select, Spinner } from '../../components/common';
import { Header, Footer } from '../../components/layout';
import { IHomeReducer } from '../../state/models';
import { ICity, ICoordinates, ICurrent, IDaily, IGetWeatherParams } from './models';

import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import useGeo from '../../hooks/useGeo';
import './style.css';

interface IHomeProps {
  getWeather(params: IGetWeatherParams): void;
  store: IHomeReducer;
}

export const HomeComponent: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { getWeather, store } = props;
  const [loader, setLoader] = useState(true);
  const [cityCoordinates, setCityCoordinates] = useState<ICoordinates | null>(null);
  const current: ICurrent = store.weather.data.current;
  const daily: IDaily[] = store.weather.data.daily;
  const geolocation = useGeo();
  const [cities, setCities] = useState<ICity[]>([
    { description: 'Bogotá', value: { lat: 4.601874, lon: -74.071648 } },
    { description: 'Barcelona', value: { lat: 41.40319, lon: 2.175026 } },
    { description: 'Sydney', value: { lat: -33.856721, lon: 151.21525 } },
    { description: 'Estocolmo', value: { lat: 59.329184, lon: 18.090643 } },
    { description: 'Cairo', value: { lat: 30.031534, lon: 31.254341 } }
  ]);

  useEffect(() => {
    if (geolocation.error !== null) {
      if (geolocation.latitude && geolocation.longitude) {
        cities.unshift({
          description: 'Ubicación actual',
          value: { lat: geolocation.latitude, lon: geolocation.longitude }
        });
        setCities(cities);
        setCityCoordinates({
          lat: geolocation.latitude,
          lon: geolocation.longitude
        });
      } else setCityCoordinates(cities[0].value);
    }
  }, [geolocation.error]);

  useEffect(() => {
    if (!store.weather.loading && Object.keys(store.weather.data).length && geolocation.error !== null) {
      setLoader(false);
    }
  }, [store.weather.loading, geolocation.error]);

  useEffect(() => {
    if (cityCoordinates)
      getWeather({
        lat: cityCoordinates.lat,
        lon: cityCoordinates.lon,
        exclude: 'minutely,hourly,alerts',
        units: 'metric',
        lang: 'es',
        appid: '4876cc236ffcabea6a6aad9960a7ea32'
      });
  }, [cityCoordinates]);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = JSON.parse(event.target.value);
    setCityCoordinates(value);
  };

  const renderWeatherNextDays = () =>
    daily.map((day: IDaily, i) => {
      if (i > 0 && i < 6)
        return (
          <Card
            key={day.dt + i}
            date={day.dt}
            dayWeatherDescripton={day.weather[0].description}
            icon={day.weather[0].icon}
            tempeture={day.temp.day}
            feelsLike={day.feels_like.day}
            humidity={day.humidity}
            rainPosibility={day.pop}
            pressure={day.pressure}
            windSpeed={day.wind_speed}
            uvi={day.uvi}
            dewPoint={day.dew_point}
            visibility={10000}
            sunrise={day.sunrise}
            sunset={day.sunset}
          />
        );
    });

  return (
    <>
      <Header title='Flow Weather' />
      <main className='home__main'>
        {loader ? (
          <section className='home__loader'>
            <Spinner />
          </section>
        ) : store.weather.error ? (
          <Message title='¡Lo sentimos!' description='En este momento el servicio no se encuentra disponible' />
        ) : (
          <>
            <section className='home__today__weather'>
              <div>
                <Select data={cities} handleChange={handleChangeSelect} />
              </div>
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
            </section>
            <section>
              <h2 className='home__next__days__weather__title'>{'Pronóstico de los siguentes días'}</h2>
              <div className='home__next__days__weather'>{renderWeatherNextDays()}</div>
            </section>
          </>
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
