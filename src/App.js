import Navi from "./Navigation";
import Category from "./CategoryList";
import Product from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    clickedLink: "",
    listData: []
  }
  componentDidMount() {
    this.getLists();
  }
  getLists = (categoryId) => {
    let URL="http://localhost:3000/products";
    if(categoryId){
      URL+=`?categoryId=${categoryId}`
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
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <Category info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Product info={productInfo} products={this.state.listData} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}