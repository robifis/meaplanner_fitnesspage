import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free';

function MyApp ({ Component, pageProps }){
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
