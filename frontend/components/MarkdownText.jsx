import ReactMarkdown from 'react-markdown';
const MarkdownText = (props) => {
	const renderers = {
		image : ({ alt, src }) => <img alt={alt} src={src} />,
	};
	console.log(props);
	return (
		<div>
			<ReactMarkdown
				comments={renderers}
				children={props.children}
				transformImageUri={(uri) =>

						uri.startsWith('http') ? uri :
						`${process.env.IMAGE_URI}${uri}`}
			/>
		</div>
	);
};

export default MarkdownText;
