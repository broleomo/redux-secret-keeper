import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Jumbotron, Button} from 'reactstrap';

class App extends Component {
  render(){
    return(
      <div>
     <Jumbotron>
       <h1 className="display-3">Secret Keeper</h1>
        <p className="lead">Do you want to keep a secret?</p>
       <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
       <p className="lead">
         <Button color="primary">Learn More</Button>
       </p>
     </Jumbotron>
   </div>
    )
  }
  }
  //
  // const mapStateToProps = (state) => {
  //   return{};
  // }

export default App;
