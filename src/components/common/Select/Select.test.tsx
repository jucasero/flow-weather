import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Select } from './Select';

describe('<Select />', () => {
  let dataMock: any = [{ description: 'BogotÃ¡', value: { lat: 4.601874, lon: -74.071648 } }];
  const onChangeMock = jest.fn();

  test('renders component', () => {
    const component = render(<Select data={dataMock} handleChange={onChangeMock} />);
    expect(component.container.getElementsByTagName('select')).toHaveLength(1);
  });

  test('value property of array data is not a object', () => {
    dataMock = [{ description: 'Buenos Aires', value: 15 }];
    const component = render(<Select data={dataMock} handleChange={onChangeMock} />);
    expect(component.container.getElementsByTagName('select')).toHaveLength(1);
  });
});
