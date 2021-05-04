import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from "@chakra-ui/react"

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer';

const httpLink  = new createHttpLink({
  uri: process.env.API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const tokenObject = JSON.parse(localStorage.getItem("token"))
  const token = tokenObject['token'];
  console.log("in graphql machin  ::  ");
  console.log(token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
