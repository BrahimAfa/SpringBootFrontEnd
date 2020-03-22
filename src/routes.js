import React from 'react'
import { Route, Switch, } from 'react-router-dom';
import Home from './pages/Home'
import Register from './components/register'
import LoginComp from './components/login';
import ProductList from './components/productLits';
import AddProduct from './components/addPoduct';
import ProductControll from './components/adminPanel';
import UpdateProduct from './components/updateProduct';
import Authorize from './components/AuthorizeAdmin';
import NotFoud from './components/403';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={LoginComp} />
            <Route path='/catalogue' exact component={ProductList} />
            <Route path='/products' exact component={ProductControll} />
            <Route path='/product/add' exact component={AddProduct} />
            <Route path='/product/update/:id' exact component={UpdateProduct} />
            <Route path='*' component={NotFoud} />
        </Switch>
    )
}

export default Routes;