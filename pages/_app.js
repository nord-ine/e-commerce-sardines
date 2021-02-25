import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';


import NavBar from '../components/NavBar'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return(
    <>
    <ApolloProvider client={client}>
        <NavBar/>
        <Component {...pageProps} />
    </ApolloProvider>
    </>
  )
      
}

export default MyApp
