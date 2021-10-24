import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BIGCOMMERCETOKEN } from './config'

const httpLink = createHttpLink({
    //uri: 'https://api.bigcommerce.com/stores/pfb6r9f9s1/v3/catalog/products',
    uri: 'https://stream.mybigcommerce.com/graphql',

});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    //const token = localStorage.getItem('kzv5igaxufbgkdxv2n1p8axjc3rnc8e');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            //"Access-Control-Allow-Origin": "http://localhost:3000",
            //"Origin": "http://localhost:3000",
            //...headers,
            authorization: `Bearer ${BIGCOMMERCETOKEN}`,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
    fetchOptions: {
        mode: 'no-cors',
    },

});


export default client;
