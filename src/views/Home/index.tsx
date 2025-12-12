import { useState } from "react";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import { Select } from "@/components/common";
import { Footer, Header } from "@/components/layout";
import type { ICity } from "@/models";
import styles from "./styles.module.css";

export const Home: React.FC = () => {
	const [cities] = useState<ICity[]>([
		{ description: "Bogotá", value: { lat: 4.601874, lon: -74.071648 } },
		{ description: "New York", value: { lat: 40.712776, lon: -74.005974 } },
		{ description: "Sydney", value: { lat: -33.856721, lon: 151.21525 } },
		{ description: "Estocolmo", value: { lat: 59.329184, lon: 18.090643 } },
		{ description: "Cairo", value: { lat: 30.031534, lon: 31.254341 } },
	]);

	return (
		<>
			<Header title="Flow Weather" />
			<main className={styles.main}>
				<Select data={cities} handleChange={() => {}} />
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
