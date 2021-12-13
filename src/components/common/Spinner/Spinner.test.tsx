import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Spinner } from './Spinner';

describe('<Spinner />', () => {
  test('renders component', () => {
    const component = render(<Spinner />);
    expect(component.container.getElementsByClassName('center')).toHaveLength(1);
    expect(component.container.getElementsByClassName('lds__ring')).toHaveLength(1);
  });
});
