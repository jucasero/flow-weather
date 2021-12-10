import './style.css';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <main className='not__found__main'>
    <div className='not__found__container'>
      <h1 className='not__found__container__title'>¡Error 404!</h1>
      <h4>Pagina no encontrada</h4>
      <Link to='/'>
        <button className='not__found__button'>Volver al Inicio</button>
      </Link>
    </div>
  </main>
);
