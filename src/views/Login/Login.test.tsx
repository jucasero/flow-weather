import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Login } from './Login';

describe('<Login />', () => {
  test('renders component', () => {
    const component = render(
      <BrowserRouter>
        <Login message='login message' buttonText='button text' />
      </BrowserRouter>
    );
    component.getByText('login message');
    component.getByText('button text');
  });
});
