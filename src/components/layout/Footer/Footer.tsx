import './style.css';

interface IFooterProps {
  githubIcon: string;
  linkedinIcon: string;
  githubLink: string;
  linkedinLink: string;
  githubText: string;
  linkedinText: string;
}

export const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  const { githubIcon, linkedinIcon, githubLink, linkedinLink, githubText, linkedinText } = props;

  return (
    <footer className='footer'>
      <a className='footer__item' href={githubLink} target='_blank' rel='noreferrer'>
        <img className='footer__image' src={githubIcon} alt='github icon' />
        <h3 className='footer__image__text'>{githubText}</h3>
      </a>
      <div className='footer__item'>
        <a className='footer__item' href={linkedinLink} target='_blank' rel='noreferrer'>
          <img className='footer__image' src={linkedinIcon} alt='linkedin icon' />
          <h3 className='footer__image__text'>{linkedinText}</h3>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
