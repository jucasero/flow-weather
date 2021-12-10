import './style.css';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => (
  <main className='login__main'>
    <div className='login__container'>
      <h1>Bienvenido a Flow Weather</h1>
      <Link to='/home'>
        <button className='login__button'>Ingresar</button>
      </Link>
    </div>
  </main>
);
