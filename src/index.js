import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './contexts/AppContext';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.NODE_ENV !== 'production' ? 'http://localhost:4040/graphql' : 'http://localhost:4040/graphql',
  credentials: 'include'
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <AppProvider>
          <App />
        </AppProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
