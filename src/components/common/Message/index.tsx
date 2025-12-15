interface MessageProps {
	title: string;
	description: string;
}

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
	const { title, description } = props;
	return (
		<div>
			<h2>{title}</h2>
			<h4>{description}</h4>
		</div>
	);
};
