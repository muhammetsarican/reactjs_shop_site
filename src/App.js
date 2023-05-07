import Navi from "./Navigation";
import Category from "./CategoryList";
import Product from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from 'react';
import alertify from "alertifyjs";

export default class App extends Component {
  state = {
    clickedLink: "",
    listData: [],
    cart: []
  }
  resetCart=()=>{
    this.setState({cart:[]});
    alertify.warning("Cart reset is successful!");
  }
  deleteItemFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newCart});
  }
  addToCart = (product) => {
    let newCart=this.state.cart;
    var addedItem=newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({product:product, quantity:1});
    }
    this.setState({cart:newCart});
    alertify.success(product.productName+" added successfully!");
  }
  componentDidMount() {
    this.getLists();
  }
  getLists = (categoryId) => {
    let URL = "http://localhost:3000/products";
    if (categoryId) {
      URL += `?categoryId=${categoryId}`
    }
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ listData: data }))
  }
  changeSelectedLink = (category) => {
    this.setState({ clickedLink: category.categoryName });
    this.getLists(category.id);
  }
  render() {
    let categoryInfo = { title: "Category Section", changeSelectedLink: this.changeSelectedLink, clickedLink: this.state.clickedLink };
    let productInfo = { title: "Product Section", clickedLink: this.state.clickedLink };
    return (
      <div>
        <Container>
          <Row>
            <Navi cart={this.state.cart} deleteItemFromCart={this.deleteItemFromCart} resetCart={this.resetCart}/>
          </Row>
          <Row>
            <Col xs="3">
              <Category info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Product info={productInfo} products={this.state.listData} addToCart={this.addToCart} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}