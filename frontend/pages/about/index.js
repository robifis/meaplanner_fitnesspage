import Heading from '../../components/Heading';
import ReactMarkdown from '../../components/MarkdownText.jsx';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
const index = ({ data }) => {
	return (
		<div className='px-3 main'>
			<Heading title={data.about.heading} />
			<div className='row mb-5'>
				<div className='col-lg-12 mb-5'>
					<ReactMarkdown children={data.about.aboutText} />
				</div>
			</div>
		</div>
	);
};

export default index;

export const getStaticProps = async () => {
	// Fetching GraphQL data
	const { data } = await client.query({
		query : gql`
			query About {
				about {
					id
					heading
					aboutText
				}
			}
		`,
	});

	return {
		props : { data },
	};
};
