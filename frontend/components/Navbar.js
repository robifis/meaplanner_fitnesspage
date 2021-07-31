import Link from 'next/link';
const Navbar = () => {
	return (
		<div className='sticky-top'>
			<nav className='navbar navbar-collapse-md navbar-expand-xl navbar-light bg-white shadow m-0 p-0'>
				<div className='container'>
					<Link href='/'>
						<a href className='navbar-brand navbar-nav-scroll text-dark mb-0 h3 text-uppercase'>
							Meal Plan Website
						</a>
					</Link>
					<button
						className='navbar-toggler m-3'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarToggler'
						aria-controls='navbarToggler'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='w-100 collapse navbar-collapse' id='navbarToggler'>
						<ul className='navbar nav w-100 justify-content-end'>
							<li className='nav-item btn rounded-0'>
								<Link href='/'>
									<a className='nav-link '>Home</a>
								</Link>
							</li>
							<li className='nav-item rounded-0'>
								<Link href='/about'>
									<a className='nav-link'>About</a>
								</Link>
							</li>
							<li className='nav-item rounded-0'>
								<Link href='/macrocalculator'>
									<a className='nav-link'>Macro Calculator</a>
								</Link>
							</li>
							<li className='nav-item rounded-0'>
								<Link href='/growthcollection'>
									<a className='nav-link'>Growth Collection</a>
								</Link>
							</li>
							<li className='nav-item rounded-0'>
								<Link href='/contact'>
									<a className='nav-link'>Contact Us</a>
								</Link>
							</li>
							<li className='nav-item rounded-0'>
								<Link href='/growthCollectionLink'>
									<a className='nav-link'>Submit a Link</a>
								</Link>
							</li>
							<li className='nav-item pe-3'>
								<Link href='/api/auth/login'>
									<a className='nav-link text-light btn btn-danger'>Login</a>
								</Link>
							</li>
							<li className='nav-item pe-3'>
								<Link href='/api/auth/logout'>
									<a className='nav-link text-light btn btn-danger'>Logout</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
