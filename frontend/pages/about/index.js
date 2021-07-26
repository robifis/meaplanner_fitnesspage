import Heading from '../../components/Heading';
import Image from 'next/image';
const index = ({ aboutData }) => {
	console.log(aboutData);
	console.log(Heading);
	return (
		<div className='px-3 main'>
			<Heading title='About' />
			<div className='row'>
				<div className='col-lg-12 mb-3'>
					<img
						src='http://localhost:1337/uploads/Mansfield_Town_v_Northampton_Town_Sky_Bet_04yznk5o_Xtgl_9312c6129c.jpeg'
						alt='Bobby Olejnik Playing Footbal'
						className='img-fluid'
					/>
				</div>
				<div className='col lg-12 mb-5'>
					<p className='lead'>{aboutData.aboutText}</p>
				</div>
			</div>
		</div>
	);
};

export default index;

export const getServerSideProps = async (context) => {
	try {
		const raw = await fetch('http://localhost:1337/about');
		const aboutData = await raw.json();
		console.log(aboutData);
		return {
			props : { aboutData },
		};
	} catch (error) {
		console.error(error);
	}
};
