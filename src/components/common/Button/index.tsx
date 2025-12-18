import type { ReactNode } from "react";
import { Link } from "react-router";
import styles from "./styles.module.css";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	to?: string;
	type?: "button" | "submit" | "reset";
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	to,
	type = "button",
	className = "",
}) => {
	const combinedClassName = `${styles.button} ${className}`.trim();

	if (to) {
		return (
			<Link to={to} className={combinedClassName}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type === "button" ? "button" : type}
			onClick={onClick}
			className={combinedClassName}
		>
			{children}
		</button>
	);
};
