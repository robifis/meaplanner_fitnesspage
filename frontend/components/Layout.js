import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<script
					src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js'
					integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p'
					crossorigin='anonymous'
				/>
				<script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js'
					integrity='sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF'
					crossorigin='anonymous'
				/>
			</Head>
			<Navbar />
			<div className='main mx-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
