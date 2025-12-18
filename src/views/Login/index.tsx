import { Button } from "@/components/common";
import styles from "./styles.module.css";

interface LoginProps {
	message: string;
	buttonText: string;
}

export const Login: React.FC<LoginProps> = (props: LoginProps) => {
	const { message, buttonText } = props;

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1>{message}</h1>
				<Button to="/home">{buttonText}</Button>
			</div>
		</main>
	);
};
