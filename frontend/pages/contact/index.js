import Heading from '../../components/Heading';
import { useState } from 'react';

function index (){
	const [
		email,
		setEmail,
	] = useState('');

	const [
		name,
		setName,
	] = useState('');

	const [
		message,
		setMessage,
	] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, message, name);
		setName('');
		setMessage('');
		setEmail('');
	};

	return (
		<div className='main px-3 mb-1'>
			<Heading title='Contact Us' />
			<p className='lead'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quae libero quia repudiandae, ex a
				blanditiis. Iure modi laudantium ab.
			</p>
			<div className='row bg-light rounded border'>
				<form onSubmit={handleSubmit} className='p-3 col-lg-12'>
					<div className='mb-3'>
						<label for='name' class='form-label'>
							What's your name
						</label>
						<input
							value={name}
							type='text'
							onChange={(e) => setName(e.target.value)}
							className='form-control'
							id='name'
							placeholder='John Doe'
							autoComplete
							autoFocus
						/>
					</div>
					<div className='mb-3'>
						<label for='email' class='form-label'>
							Email address
						</label>
						<input
							type='email'
							value={email}
							className='form-control'
							id='email'
							placeholder='name@example.com'
							onChange={(e) => setEmail(e.target.value)}
							autoComplete
						/>
					</div>
					<div className='mb-3'>
						<label for='message' className='form-label'>
							Message
						</label>
						<textarea
							rows='5'
							value={message}
							className='form-control'
							id='message'
							onChange={(e) => setMessage(e.target.value)}
							placeholder='How can we help you...'
							autoComplete
						/>
					</div>
					<button className='btn btn-primary' type='submit'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}

export default index;
