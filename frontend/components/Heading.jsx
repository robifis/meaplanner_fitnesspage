import Head from 'next/head';
const Heading = (props) => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
			</Head>
			<h1 className='h2 py-3'>{props.title}</h1>
		</div>
	);
};

export default Heading;
