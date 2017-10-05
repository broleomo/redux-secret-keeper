import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
export default class BaseLayout extends React.Component {
  render(){
    return(
      <div>
      <Navbar color="faded" light toggleable>
          <NavbarToggler right />
          <NavbarBrand>SecretKeeper</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{margin:'15px'}} to="/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{margin:'15px'}} to="/dashboard">Dashboard</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      {this.props.children}
      </div>
    )
  }
}
