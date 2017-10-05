import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import BaseLayout from './components/BaseLayout';
import Register from './components/Register';
import Login from './components/Login'
import App from './components/App';
import Dashboard from './components/Dashboard'

import {reducer} from './reducers';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk)
  ));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <BaseLayout>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/' component={App} />
        </Switch>
      </BaseLayout>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
