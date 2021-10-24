import '../styles/globals.css'
import AppLayout from '../layouts/app-layout'
import { ApolloProvider } from '@apollo/client'
import client from "../apollo-client";


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client = { client }>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  )
}

export default MyApp
