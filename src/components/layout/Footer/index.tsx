import styles from "./styles.module.css";

interface FooterProps {
	githubIcon: string;
	linkedinIcon: string;
	githubLink: string;
	linkedinLink: string;
	githubText: string;
	linkedinText: string;
}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
	const {
		githubIcon,
		linkedinIcon,
		githubLink,
		linkedinLink,
		githubText,
		linkedinText,
	} = props;

	return (
		<footer className={styles.footer}>
			<a
				className={styles.item}
				href={githubLink}
				target="_blank"
				rel="noreferrer"
			>
				<img className={styles.image} src={githubIcon} alt="github icon" />
				<h3 className={styles.imageText}>{githubText}</h3>
			</a>

			<a
				className={styles.item}
				href={linkedinLink}
				target="_blank"
				rel="noreferrer"
			>
				<img className={styles.image} src={linkedinIcon} alt="linkedin icon" />
				<h3 className={styles.imageText}>{linkedinText}</h3>
			</a>
		</footer>
	);
};

export default Footer;
