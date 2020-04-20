import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Home from './components/Home';
import OrderSuccess from './components/OrderSuccess';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={OrderSuccess} />
        <Route  component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
