import githubIcon from "@/assets/icons/github-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import { Footer, Header } from "@/components/layout";
import styles from "./styles.module.css";

export const Home: React.FC = () => {
	return (
		<>
			<Header title="Flow Weather" />
			<main className={styles.home__main}>
				<h4>main body</h4>
			</main>
			<Footer
				githubIcon={githubIcon}
				linkedinIcon={linkedinIcon}
				githubLink="https://github.com/jucasero"
				linkedinLink="https://www.linkedin.com/in/jucasero"
				githubText="@jucasero"
				linkedinText="@jucasero"
			/>
		</>
	);
};
