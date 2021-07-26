import Link from 'next/link';
const Navbar = () => {
	return (
		<div className='sticky-top'>
			<nav className='navbar navbar-expand-lg navbar-collapse-md navbar-light bg-white shadow m-0 p-0'>
				<div className='container'>
					<Link href='/'>
						<a href className='navbar-brand navbar-nav-scroll text-dark mb-0 h3 text-uppercase'>
							Meal Plan Website
						</a>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarToggler'
						aria-controls='navbarToggler'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse text-right' id='navbarToggler'>
						<ul className='navbar-nav w-100 d-flex justify-content-end'>
							<li className='nav-item btn rounded-0'>
								<Link href='/'>
									<a className='nav-link '>
										<i class='bi bi-hash' />
										Home
									</a>
								</Link>
							</li>
							<li className='nav-item btn rounded-0'>
								<Link href='/about'>
									<a className='nav-link '>
										<i class='bi bi-hash' />
										About
									</a>
								</Link>
							</li>
							<li className='nav-item btn rounded-0'>
								<Link href='/macrocalculator'>
									<a className='nav-link'>
										<i class='bi bi-hash' />
										Macro Calculator
									</a>
								</Link>
							</li>
							<li className='nav-item btn rounded-0'>
								<Link href='/growthcollection'>
									<a className='nav-link'>
										<i class='bi bi-hash' />
										Growth Collection
									</a>
								</Link>
							</li>
							<li className='nav-item btn rounded-0'>
								<Link href='/contact'>
									<a className='nav-link'>
										<i class='bi bi-hash' />
										Contact Us
									</a>
								</Link>
							</li>
							<li className='nav-item btn rounded-0'>
								<Link href='/growthCollectionLink'>
									<a className='nav-link btn btn-primary'>Submit a Link</a>
								</Link>
							</li>
							{/* <li className='nav-item pe-3'>
							<Link href=''>
								<a className='nav-link text-light btn btn-danger'>Login</a>
							</Link>
						</li>
						<li className='nav-item pe-3'>
							<Link href=''>
								<a className='nav-link text-light btn btn-success'>SignUp</a>
							</Link>
						</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
