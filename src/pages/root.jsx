import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/store/provider';
import RoutesPrivate from '../components/routes/private/private';
import Produts from './products';
import Login from './login';
import NewUser from './new-user';
import ProductCard from './product-cart';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/newuser" component={NewUser} />
        <Route path="/cart" component={ProductCard}/>
        <RoutesPrivate path="/" component={Produts} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;