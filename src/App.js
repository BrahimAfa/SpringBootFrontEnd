import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Routes from './routes';
import AuthContextProvider from './contexts/authContext';
import ProductContextProvider from './contexts/productContext';

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
