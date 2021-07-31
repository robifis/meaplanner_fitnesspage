import Image from 'next/image';
import Heading from '../components/Heading';
import contentfulClient from '../contentful-init';
import RichTextContent from '../components/RichTextContent';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home ({ singleEntry }){
	const { user, error, isLoading } = useUser();
	console.log(isLoading);
	console.log(user);
	console.log(error);

	const { headline, homepageText } = singleEntry.fields;
	return (
		<div>
			<Heading title={headline} />
			<RichTextContent data={homepageText} />
		</div>
	);
}

export const getStaticProps = async () => {
	// Contentful fetching specific entry
	const entryID = 'yLSTz4DQZGaEHVYgZ3hY6';
	const singleEntry = await contentfulClient.getEntry(entryID);

	return {
		props : { singleEntry }, // will be passed to the page component as props
	};
};
