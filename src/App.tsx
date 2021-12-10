import { Route, Routes } from 'react-router-dom';
import { NotFound, Home, Login } from './views';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
