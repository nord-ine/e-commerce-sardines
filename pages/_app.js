import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from "@chakra-ui/react"
import {useState} from 'react';

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer';
import ProductsContext from '../Functions/ProductsContext'; 

const httpLink  = new createHttpLink({
  uri: process.env.API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  let tokenObject ;
  if (typeof window !== 'undefined')
  {
     tokenObject = JSON.parse(localStorage.getItem("token"));
  }
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

  const [productsList, setProductsList] = useState([])
  return(
    <>
    <ChakraProvider>
      <ApolloProvider client={client}>
      <ProductsContext.Provider value={{productsList,setProductsList}} >
          <NavBar/>
          <Component {...pageProps} />
          <Footer/>
      </ProductsContext.Provider>
      </ApolloProvider>
    </ChakraProvider>
 
    </>
  )
      
}

export default MyApp
