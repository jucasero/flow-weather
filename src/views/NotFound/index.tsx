import { Button } from "@/components/common";
import styles from "./styles.module.css";

export const NotFound: React.FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.errorCode}>404</h1>
				<h2 className={styles.title}>¡Ups! Página no encontrada</h2>
				<p className={styles.description}>
					Parece que te has perdido en las nubes. La página que buscas no existe
					o ha sido movida.
				</p>
				<Button to="/home">Volver al inicio</Button>
			</div>
		</main>
	);
};
