import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from "@chakra-ui/react"

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return(
    <>
    <ChakraProvider>
      <ApolloProvider client={client}>
          <NavBar/>
          <Component {...pageProps} />
          <Footer/>
      </ApolloProvider>
    </ChakraProvider>
 
    </>
  )
      
}

export default MyApp
