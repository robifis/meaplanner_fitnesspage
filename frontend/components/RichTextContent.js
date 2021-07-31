import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const renderOptions = {
	renderNode : {
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			const assetType = node.data.target.fields.file.contentType;
			switch (assetType) {
				case 'video/mp4':
					return (
						<video width='100%' height='100%' controls>
							<source src={node.data.target.fields.file.url} type='video/mp4' />
						</video>
					);
				case 'image/jpeg':
					return (
						<Image
							src={`https://${node.data.target.fields.file.url}`}
							height={node.data.target.fields.file.details.image.height}
							width={node.data.target.fields.file.details.image.width}
							alt={node.data.target.fields.description}
							className='mb-5'
						/>
					);
				case 'image/jpg':
					return (
						<Image
							src={`https://${node.data.target.fields.file.url}`}
							height={node.data.target.fields.file.details.image.height}
							width={node.data.target.fields.file.details.image.width}
							alt={node.data.target.fields.description}
							className='mb-5'
						/>
					);
				case 'image/png':
					return (
						<Image
							src={`https://${node.data.target.fields.file.url}`}
							height={node.data.target.fields.file.details.image.height}
							width={node.data.target.fields.file.details.image.width}
							alt={node.data.target.fields.description}
							className='mb-5'
						/>
					);
				default:
					return 'Nothing to see here...';
			}
		},
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return (
				<div>
					<p>{children}</p>
				</div>
			);
		},
	},
};
const RichTextContent = (props) => {
	return <div className='px-3'>{documentToReactComponents(props.data, renderOptions)}</div>;
};
export default RichTextContent;
