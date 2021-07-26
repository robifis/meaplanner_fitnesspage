import Head from 'next/head';
import Heading from '../components/Heading';

export default function Home ({ data, about }){
	console.log(data);
	console.log(about);
	return (
		<div>
			<Heading title='Home' />
		</div>
	);
}

export const getStaticProps = async () => {
	const data = await fetch('http://localhost:1337/activity-levels');
	const res = await data.json();

	const rawAbout = await fetch('http://localhost:1337/about');
	const aboutRes = await rawAbout.json();
	return {
		props : { data: res, about: aboutRes }, // will be passed to the page component as props
	};
};
