import './style.css';

export const Spinner: React.FC = () => (
  <div className='center'>
    <div className='lds__ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
