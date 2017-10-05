import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {fetchLogin, fetchDashboard} from '../actions';
import {connect} from 'react-redux';
class Login extends React.Component {
  state ={
    email: '',
    password: ''
  }
handle = field => e => this.setState({[field]: e.target.value})
 handleLogin = () => {
   this.props.dispatch(fetchLogin(this.state.email, this.state.password))
   .then(() => this.props.dispatch(fetchDashboard()));
 }
  render(){
    return (
      <div className="container">
          <Form inline>
            <FormGroup style={{margin:'15px'}}>
              <Label style={{margin:'5px'}}>Email</Label>
              <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup>
              <Label style={{margin:'5px'}}>Password</Label>
              <Input onChange={this.handle('password')} value={this.state.password} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            <Button onClick={this.handleLogin} style={{margin:'15px'}}>Submit</Button>
          </Form>
      </div>
    )
  }
}
export default connect()(Login);
