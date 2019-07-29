import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {createStore} from 'redux';
import reducer from './Reducers';
import {Provider} from 'react-redux'

const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
    	<div>
	        <Layout>
	          <BurgerBuilder />
	        </Layout>
	    </div>
	    </Provider>
    );
  }
}

export default App;
