import { ICity } from '../../../views/Home/models';
import './style.css';

interface ISelectProps {
  data: ICity[];
  handleChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

export const Select: React.FC<ISelectProps> = (props: ISelectProps) => {
  const { data, handleChange } = props;

  const formatOptionValue = (value: number | string | object) => {
    if (typeof value === 'object') return JSON.stringify(value);
    return value;
  };

  return (
    <select className='select' onChange={handleChange}>
      {data.map((data, i) => (
        <option className='select__option' key={data.description + i} value={formatOptionValue(data.value)}>
          {data.description}
        </option>
      ))}
    </select>
  );
};
