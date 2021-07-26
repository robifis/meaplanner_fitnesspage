import Link from 'next/link';
const tdeeandbmr = () => {
	return (
		<div>
			<h1 className='h1 pt-3'>TDEE and BMR Explained</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptas iusto molestias quaerat
				doloribus corrupti cum? Velit ipsa vitae iure!
			</p>
			<h3 className='h3 pt-3'>What is BMR</h3>
			<p>
				The basal metabolic rate (BMR) is the amount of energy that is expended at rest in a neutral environment
				after the digestive system has been inactive for about 12 hours. It is the rate of one’s metabolism when
				waking in the morning after “fasting” during sleep.
			</p>
			<h3 className='h3 pt-3'>What is TDEE</h3>
			<p>
				When trying to figure out how to approach your diet, knowing your TDEE can be very helpful. TDEE stands
				for ‘Total Daily Energy Expenditure’, which is the total number of calories your body is burning each
				day – and, by extension, the number of calories that you’d need to eat each day to maintain your current
				weight. This is also sometimes referred to as your ‘maintenance caloric intake’. Knowing your TDEE can
				be very useful when you’re trying to determine how many calories you need to eat when you’re cutting
				(trying to lose fat) or when you’re bulking (trying to gain weight and build muscle).
			</p>
			<h3 className='h3 pt-3'>Factors that make up TDEE</h3>
			<p>
				The easiest way to think about it is that your TDEE is an estimate for the total amount of energy that
				you are expending each day in all respects. This includes your BMR, which is the amount of energy your
				body needs to maintain its most basic functions (breathing, keeping your heart beating, etc). Next up,
				your TDEE factors in your daily activity levels, which includes any exercise you do (such as
				weightlifting, cardio, walking, etc). In addition to these 2 components, your TDEE also includes any
				energy costs that can be attributed to the thermic effect of food (or TEF), which is just the amount of
				energy your body requires to digest and process the different foods that you eat. Finally, TDEE also
				includes something called NEAT, which stands for Non-Exercise Activity Thermogenesis. This is the energy
				that you expend fidgeting, pacing, etc, and can vary greatly from person to person.
			</p>

			<h3 className='h3 pt-3'>How to calculate your TDEE</h3>

			<dl className='row'>
				<dt className='col-3 h5 p-3'>Harris - Benedict Equaiton</dt>
				<dd className='col-9 p-3'>
					There about 3 ways to calculate your TDEE. The first one is the (now revised) {' '}
					<a href='https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation' className='text-green'>
						Harris Benedict Equation
					</a>:
					<br />
					<strong>Men BMR </strong> = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age
					in years) <br /> <strong>Women BMR </strong> = 447.593 + (9.247 × weight in kg) + (3.098 × height in
					cm) - (4.330 × age in years)
				</dd>
				<dt className='col-3 h5 p-3'>Mifflin - St Jeor</dt>
				<dd className='col-9 p-3'>
					The next (more popluar and aruably more accurate) formula was created by Mifflin and St Jeor and it
					looks as follows: <br /> <strong>Men BMR </strong> = (10 × weight in kg) + (6.25 × height in cm) -
					(5 × age in years) + 5
					<br />
					<strong>Women BMR </strong>= (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
				</dd>

				<dt className='col-3 h5 p-3'>Katch-McArdle</dt>
				<dd className='col-9 p-3'>
					The Katch-McArdle formula is used to predict Resting Daily Energy Expenditure (RDEE). The Cunningham
					formula is commonly cited to predict RMR instead of BMR; however, the formulas provided by
					Katch-McArdle and Cunningham are the same. In order to apply this formula, you need to know your
					Lean Body Mass (LBM). The LBM can be obtained using Boer formula, as shown below:
					<br />
					<strong>Men LBM </strong> = 0.407 x Weight (in kg) + 0.267 x Height (in cm) - 19.2 <br />
					<strong>Women LBM </strong> = 0.252 x Weight (in kg) + 0.473 x Height (in cm) - 48.3
				</dd>
			</dl>
			<h3 className='h3 pt-3'>How to track your Macros</h3>
			<p>
				The term “tracking macros” simply means logging the foods you eat on a website, app or food journal. The
				most convenient way to track macros may be through an app like MyFitnessPal (<a
					className='text-green'
					href='https://play.google.com/store/apps/details?id=com.myfitnesspal.android&hl=en_GB&gl=US'>
					Android
				</a>) (<a className='text-orange' href='https://apps.apple.com/us/app/myfitnesspal/id341232718'>
					iOS
				</a>). The app is user-friendly and specifically designed to simplify tracking macros. In addition, a
				digital food scale may help you track your macros — though it isn’t necessary. If you invest in one,
				weigh each food item you eat before logging it into your app of choice. Several apps feature a barcode
				scanner that automatically inputs a serving of a scanned food into your macro log. You can also
				hand-write macros into a physical journal. The method depends on your individual preference. Keep in
				mind that it’s not necessary to hit your macro targets exactly. You can still meet your goals even if
				you go a few grams over or under each day.
			</p>
			<h3 className='h3 pt-3'>What's the right macro composition</h3>
			<p>
				The best way to calculate you macros is to figure out what your overall goal is. Without going into too
				much depth, if you're in a caloric deficit (Hypocaloric) you need to really focus on protein. If your
				goal is to gain weight (muscle mass) you can get away with lowering your protein a bit and increasing
				your carbs. Fats should generally be kept low at around 0.3g/kg of bodyweight. Let's take a look...
			</p>
			<dl className='row'>
				<dt className='h4 col-3 p-3 bg-light'>Protein</dt>
				<dd className='bg-light col-9 p-3'>
					Protein is essential for the growth of new tissue as well as fixing broken tissue – like what
					happens when you work out. Protein should be your new best friend if you want to gain or maintain
					muscle.
					<blockquote className='blockquote pt-3'>
						<p>The recommended amount of protein per day is 2.2g/kg of lean body mass</p>
					</blockquote>
				</dd>
				<dt className='h4 col-3 p-3'>Fats</dt>
				<dd className='col-9 p-3'>
					Fats have been demonised for years. Everything is "low fat this" and "0% fat that". Healthy Fats can
					be incredibly beneficial for hitting your body composition goals, but they also affect our hormones
					– too little fat in our diet can be very harmful. Most research (and again, there are a lot of
					opinions out there) supports that 20%-30% of overall TDEE calories should come from the fat macro.
					<blockquote className='pt-3 blockquote'>
						<p>The minimum recommended amount is 0.6g-0.7g/kg of bodyweight</p>
					</blockquote>
				</dd>
				<dt className='h4 col-3 bg-light p-3'>Carboyhdrates</dt>
				<dd className='col-9 p-3 bg-light'>
					Carbs are easy to calculate - once you've calculated your protein and fat macros, fill the rest out
					with carbs. It's that simple.
					<blockquote className='pt-3 blockquote'>
						<p>It is all about Calories In vs Calories Out</p>
					</blockquote>
				</dd>
			</dl>
			<h4 className='h4 pt-3'>What next</h4>
			<p>
				Now that you're better infomred head back to the <Link href='/macrocalculator'>Macro Calcuator</Link>{' '}
				and figure out your macros
			</p>
		</div>
	);
};

export default tdeeandbmr;
