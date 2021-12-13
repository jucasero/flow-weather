import { render } from '@testing-library/react';

import { Message } from './Message';

describe('<Message />', () => {
  test('renders component', () => {
    const component = render(<Message title='message title' description='message description' />);
    component.getByText('message title');
    component.getByText('message description');
  });
});
