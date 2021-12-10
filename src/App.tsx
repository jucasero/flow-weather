import { Route, Routes } from 'react-router-dom';

import { Home } from './views/Home';
import { Login } from './views/Login';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};
