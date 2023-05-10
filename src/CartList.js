import React, { Component } from 'react';
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Category ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(item => (
              <tr>
                <td>{item.product.id}</td>
                <td>{item.product.categoryId}</td>
                <td>{item.product.productName}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>{item.quantity}</td>
                <td><Button color='danger' onClick={()=>this.props.deleteItemFromCart(item.product)}>
                  Remove
                </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
  render() {
    return this.renderCart()
  }
}
