import { Link } from 'react-router-dom';

import './style.css';

interface INotFoundProps {
  title: string;
  description: string;
  buttonText: string;
}
export const NotFound: React.FC<INotFoundProps> = (props: INotFoundProps) => {
  const { title, description, buttonText } = props;
  return (
    <main className='not__found__main'>
      <div className='not__found__container'>
        <h1 className='not__found__container__title'>{title}</h1>
        <h4>{description}</h4>
        <Link to='/flow-weather'>
          <button className='not__found__button'>{buttonText}</button>
        </Link>
      </div>
    </main>
  );
};
