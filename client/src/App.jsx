import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header/index.jsx';
import Footer from './components/Footer/Footer.jsx'
<<<<<<< HEAD
=======
// import { StoreProvider } from './utils/GlobalState';
>>>>>>> dccd2ecefba2ca45ac6ba24183d2c8131624ffad

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
<<<<<<< HEAD
          <Header />
          <Outlet />
          <Footer />
=======
        {/* <StoreProvider> */}
          <Header />
          <Outlet />
          <Footer />
        {/* </StoreProvider> */}
>>>>>>> dccd2ecefba2ca45ac6ba24183d2c8131624ffad
      </div>
    </ApolloProvider>
  );
}

export default App;
