import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { NotFound } from './NotFound';

describe('<NotFound />', () => {
  test('renders component', () => {
    const component = render(
      <BrowserRouter>
        <NotFound title='test title' description='test description' buttonText='button text' />
      </BrowserRouter>
    );
    component.getByText('test title');
    component.getByText('test description');
    component.getByText('button text');
  });
});
