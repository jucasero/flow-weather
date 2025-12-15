import styles from "./styles.module.css";

interface RowCardDescriptionProps {
	firstSubtitle: string;
	firstDescription: string | number;
	secondSubtitle: string;
	secodDescription: string | number;
}

export const RowCardDescription: React.FC<RowCardDescriptionProps> = ({
	firstSubtitle,
	firstDescription,
	secondSubtitle,
	secodDescription,
}) => {
	return (
		<div className={styles.row}>
			<div className={styles.col}>
				<h4 className={styles.colItem}>{firstSubtitle}</h4>
				<p className={styles.colItem}>{firstDescription}</p>
			</div>
			<div className={styles.col}>
				<h4 className={styles.colItem}>{secondSubtitle}</h4>
				<p className={styles.colItem}>{secodDescription}</p>
			</div>
		</div>
	);
};
