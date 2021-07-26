import { useState } from 'react';
import Heading from '../../components/Heading';
const link = ({ data }) => {
	console.log(data);
	const [
		link,
		setLink,
	] = useState('');
	const [
		msg,
		setMsg,
	] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(link, msg);
		submitData(link, msg);
		setLink('');
		setMsg('');
	};

	const submitData = async (link, linkDescription) => {
		const linkData = {
			link,
			linkDescription,
		};
		const data = await fetch('http://localhost:1337/links', {
			method  : 'POST',
			headers : {
				Accept         : 'application/json',
				'Content-Type' : 'application/json',
			},
			body    : JSON.stringify(linkData),
		});
		const addResponse = await data.json();
		console.log(addResponse);
	};

	return (
		<div className='px-3 main'>
			<Heading title='Growth Collection Link' />
			<p className='lead'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut consectetur earum natus asperiores
				dolorem dolores ipsum, omnis necessitatibus nam.
			</p>

			<form className='bg-light p-3 rounded border' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label for='url' class='form-label'>
						Enter your link
					</label>
					<input
						type='text'
						value={link}
						onChange={(e) => setLink(e.target.value)}
						className='form-control'
						id='url'
						placeholder='https://interestinglink.com'
						formNoValidate
						required
						autoFocus
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description (optional)
					</label>
					<textarea
						value={msg}
						onChange={(e) => setMsg(e.target.value)}
						name='description'
						id='description'
						placeholder='What is the link about...'
						rows='4'
						className='form-control'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default link;

export const getStaticProps = async () => {
	const url = 'http://localhost:1337/links';
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	// Fetching LINKS
	return {
		props : { data },
	};
};
