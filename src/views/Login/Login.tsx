import { Link } from 'react-router-dom';

import './style.css';

interface ILoginProps {
  message: string;
  buttonText: string;
}

export const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
  const { message, buttonText } = props;

  return (
    <main className='login__main'>
      <div className='login__container'>
        <h1>{message}</h1>
        <Link to='/flow-weather/home'>
          <button className='login__button'>{buttonText}</button>
        </Link>
      </div>
    </main>
  );
};
