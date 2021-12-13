import { render } from '@testing-library/react';

import { Header } from './Header';

describe('<Header />', () => {
  test('renders component', () => {
    const component = render(<Header title='header title' />);
    component.getByText('header title');
  });
});
