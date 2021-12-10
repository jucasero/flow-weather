import { IGetWeatherParams } from './models';
import { Header, Footer } from '../../components/layout';
import { IHomeReducer } from '../../state/models';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';

interface IHomeProps {
  getWeather(params: IGetWeatherParams): void;
  store: IHomeReducer;
}

export const HomeComponent: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { getWeather, store } = props;
  console.log(getWeather, store);

  return (
    <>
      <Header title='Flow Weather' />
      <main>
        <h1>Este es el cuerpo del Home</h1>
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
