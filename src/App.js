import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <Route path= "/checkout" component={Checkout} />
              <Route path="/orders" component= {Orders} />
              <Route path="/" exact component = {BurgerBuilder} />
          </Layout>
      </div>
    );
  }
}

export default App;
