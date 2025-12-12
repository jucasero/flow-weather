import { Link } from "react-router";

import styles from "./styles.module.css";

interface ILoginProps {
	message: string;
	buttonText: string;
}

export const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
	const { message, buttonText } = props;

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1>{message}</h1>
				<Link to="/home">
					<button type="button" className={styles.button}>
						{buttonText}
					</button>
				</Link>
			</div>
		</main>
	);
};
