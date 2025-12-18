import "./styles.css";

export const Spinner: React.FC = () => (
	<div className="ring" role="progressbar" aria-label="loading">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);
