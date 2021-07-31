import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp ({ Component, pageProps }){
	return (
		<UserProvider>
			<ApolloProvider client={client}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</UserProvider>
	);
}

export default MyApp;
