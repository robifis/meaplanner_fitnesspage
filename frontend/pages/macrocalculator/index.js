import { useState } from 'react';
import Link from 'next/link';
import Heading from '../../components/Heading';
const index = () => {
	const [
		gender,
		setGender,
	] = useState('');
	const [
		age,
		setAge,
	] = useState('');
	const [
		weight,
		setWeight,
	] = useState('');
	const [
		height,
		setHeight,
	] = useState('');
	const [
		activityLevel,
		setActivityLevel,
	] = useState('');

	const [
		isSubmitted,
		setSubmitted,
	] = useState(false);

	const [
		TDEE,
		setTDEE,
	] = useState('');

	const [
		bulkingTDEE,
		setBulkingTDEE,
	] = useState('');
	const [
		cuttingTDEE,
		setCuttingTDEE,
	] = useState('');

	function handleSubmit (event){
		event.preventDefault();
		const { TDEE, BMR, bulkingTDEE, cuttingTDEE } = calculateTDEE(gender, age, height, weight, activityLevel);
		setTDEE(TDEE);
		setBulkingTDEE(bulkingTDEE);
		setCuttingTDEE(cuttingTDEE);
		setSubmitted(true);
		DisplayData();
	}

	const calculateTDEE = (gender, age, height, weight, activityLevel) => {
		// Calculate Macros here
		if (gender == 'male') {
			// const BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
			const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
			const TDEE = BMR * activityLevel;
			const bulkingTDEE = TDEE + 500;
			const cuttingTDEE = TDEE - 500;
			return {
				TDEE,
				BMR,
				bulkingTDEE,
				cuttingTDEE,
			};
		}
		else {
			// const BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
			const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
			const TDEE = BMR * activityLevel;
			const bulkingTDEE = TDEE + 500;
			const cuttingTDEE = TDEE - 500;
			return {
				TDEE,
				BMR,
				bulkingTDEE,
				cuttingTDEE,
			};
		}
	};

	return (
		<div className='d-flex flex-column justify-content-beginning px-3 pb-5'>
			<Heading title='Macro Calculator' />
			<p className='lead'>
				In order for us to be able to calculate your macros we need require a few more bits of information from
				you. Use the TDEE calculator to learn your Total Daily Energy Expenditure, a measure of how many
				calories you burn per day. This calorie calculator will also display your BMI, BMR, Macros & many other
				useful statistics!
				<br />
				<Link href='/macrocalculator/tdeeandbmr'>
					<a>What is TDEE and BMR</a>
				</Link>
			</p>
			<form className='col-sm-12 p-3  my-3 bg-light border rounded shadow' onSubmit={handleSubmit}>
				<h3 className='py-2'>Let's get some details</h3>
				<div>
					<p className='mb-1'>Gender:</p>
					<div className='form-check form-check-inline'>
						<label htmlFor='male' className='form-label'>
							Male
							<input
								type='radio'
								required
								value={gender}
								name='gender'
								id='male'
								className='form-check-input'
								onChange={() => setGender('male')}
							/>
						</label>
					</div>
					<div className='form-check form-check-inline'>
						<label htmlFor='female' className='form-check-label'>
							Female
							<input
								type='radio'
								required
								value={gender}
								name='gender'
								id='female'
								className='form-check-input'
								onChange={() => setGender('female')}
							/>
						</label>
					</div>
				</div>

				<div className='row mb-3'>
					<div className='col-md-4'>
						<label htmlFor='age' className='text-center form-label'>
							Age:
						</label>
						<input
							type='number'
							className='form-control py-2 w-50'
							id='age'
							placeholder='34'
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='row mb-3'>
					<div className='col-md-4'>
						<label htmlFor='height' className='form-label'>
							Height (in cm):
						</label>
						<input
							required
							type='number'
							onChange={(e) => setHeight(e.target.value)}
							className='form-control py-2 w-50'
							id='height'
							placeholder='188'
							value={height}
						/>
					</div>
				</div>
				<div className='row mb-3 '>
					<div className='col-md-4'>
						<label htmlFor='weight' className='form-label'>
							Weight (in kg)
						</label>
						<input
							required
							onChange={(e) => setWeight(e.target.value)}
							type='number'
							className='form-control py-2 w-50'
							id='weight'
							placeholder='75'
							value={weight}
						/>
					</div>
				</div>
				<div className='mb-3 row'>
					<div className='col-md-8'>
						<label htmlFor='activityLevel' className='form-label mb-0'>
							What is your activity level
						</label>
						<br />
						<small className='mt-0 text-muted small_text'>See FAQ to select your activity level</small>
						<select
							defaultValue='Select your activity level'
							name='activitylevel'
							id='activityLevel'
							className='form-select py-2'
							required
							onChange={(e) => {
								setActivityLevel(e.target.value);
							}}>
							<option disabled>Select your activity level</option>
							<option value='1.2'>Sedentary (Office Job)</option>
							<option value='1.375'>Light exercise (1-2 days/week)</option>
							<option value='1.55'>Moderate exercise (3-5 days/week)</option>
							<option value='1.725'>Heavy exercise (6-7 days/week)</option>
							<option value='1.9'>Athlete (2x per Day)</option>
						</select>
					</div>
				</div>
				<button className='btn btn-orange btn-lg' type='submit'>
					Calculate Macros
				</button>
			</form>
		</div>
	);
};

export default index;
