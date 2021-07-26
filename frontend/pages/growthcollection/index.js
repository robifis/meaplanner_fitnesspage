import { Client } from '@notionhq/client';
import Head from 'next/head';
import Heading from '../../components/Heading';
const index = () => {
	return (
		<div>
			<Heading title='Growth Collection Links' />
		</div>
	);
};

export const getStaticProps = async () => {
	return {
		props : { },
	};
};

export default index;
