import { useCallback } from "react";
import type { City } from "@/models";
import styles from "./styles.module.css";

interface ISelectProps {
	data: City[];
	value: string;
	handleChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

export const Select: React.FC<ISelectProps> = (props: ISelectProps) => {
	const { data, value, handleChange } = props;

	const formatOptionValue = useCallback((value: number | string | object) => {
		if (typeof value === "object") return JSON.stringify(value);
		return value;
	}, []);

	return (
		<select
			id="city-select"
			className={styles.select}
			onChange={handleChange}
			value={value}
		>
			{data.map((data) => (
				<option
					className={styles.option}
					key={data.description}
					value={formatOptionValue(data.value)}
				>
					{data.description}
				</option>
			))}
		</select>
	);
};
