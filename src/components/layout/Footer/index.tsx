import styles from "./styles.module.css";

interface IFooterProps {
	githubIcon: string;
	linkedinIcon: string;
	githubLink: string;
	linkedinLink: string;
	githubText: string;
	linkedinText: string;
}

export const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
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
				<h3 className={styles.image__text}>{githubText}</h3>
			</a>
			<div className={styles.item}>
				<a
					className={styles.item}
					href={linkedinLink}
					target="_blank"
					rel="noreferrer"
				>
					<img
						className={styles.image}
						src={linkedinIcon}
						alt="linkedin icon"
					/>
					<h3 className={styles.image__text}>{linkedinText}</h3>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
