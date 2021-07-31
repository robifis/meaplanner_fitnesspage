import Head from 'next/head';
const Heading = (props) => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className='px-3'>
				<h1 className='h2 py-3'>{props.title}</h1>
			</div>
		</div>
	);
};

export default Heading;
