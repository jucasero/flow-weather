import styles from "./styles.module.css";

interface IHeaderProps {
	title: string;
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
	const { title } = props;
	return (
		<header className={styles.header}>
			<h2>{title}</h2>
		</header>
	);
};

export default Header;
