import './style.css';

interface IMessageProps {
  title: string;
  description: string;
}

export const Message: React.FC<IMessageProps> = (props: IMessageProps) => {
  const { title, description } = props;
  return (
    <div className='section__message'>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
};
