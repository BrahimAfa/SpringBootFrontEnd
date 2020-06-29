import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Routes from './routes';
import AuthContextProvider from './contexts/authContext';
import ProductContextProvider from './contexts/productContext';
import ClientContextProvider from './contexts/clientContext';
function App() {
    return (
        <AuthContextProvider>
            <ClientContextProvider>
                <ProductContextProvider>
                    <Router>
                        <Header />
                        <Routes />
                    </Router>
                </ProductContextProvider>
            </ClientContextProvider>
        </AuthContextProvider >
    );
}

export default App;
