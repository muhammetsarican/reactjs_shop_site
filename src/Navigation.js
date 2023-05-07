import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import Cart from "./CartSummary";

export default class Navigation extends Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
    else {
      this.setState({ isOpen: true });
    }
  }
  render() {
    return (
      <div>
        <Navbar /* {...args} */>
          <NavbarBrand href="/">Muhammet Sarıcan</NavbarBrand>
          <Cart cart={this.props.cart} deleteItemFromCart={this.props.deleteItemFromCart} resetCart={this.props.resetCart}/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}