import { Route, Routes } from 'react-router-dom';
import { NotFound, Home, Login } from './views';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/flow-weather' element={<Login message='Bienvenido a Flow Weather' buttonText='Ingresar' />} />
      <Route path='/flow-weather/home' element={<Home />} />
      <Route
        path='*'
        element={<NotFound title='¡Error 404!' description='Página no encontrada' buttonText='Volver al inicio' />}
      />
    </Routes>
  );
};
