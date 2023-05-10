import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart - <Badge color='warning'>{this.props.cart.length}</Badge>
                </DropdownToggle>
                <DropdownMenu right>
                    {console.log(this.props.cart)}
                    {this.props.cart.map((item) => (
                        <DropdownItem key={item.product.id}><Badge color='danger' onClick={() => this.props.deleteItemFromCart(item.product)}>X</Badge> - Name: {item.product.productName} Quantity: <Badge color='success'>{item.quantity}</Badge></DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem onClick={() => this.props.resetCart()}><b>Reset</b></DropdownItem>
                    <DropdownItem><b>
                        <Link to="/cart">
                            Show Cart
                        </Link>
                    </b></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmptyCart() {
        return <NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>
    }
    render() {
        return this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart();
    }
}
