import React, { Component } from 'react';
import {connect} from 'react-redux';

import {loadTokenFromCookie} from "./actions";

class App extends Component {
    componentWillMount(){
      const loadToken = this.props.loadToken;
      loadToken();
    }
  }

export default App;
