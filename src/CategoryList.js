import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    state = {
        categories: []
    }
    componentDidMount(){
        this.getCategories();
    }
    getCategories=()=>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}))
    }
    render() {
        return (
            <div>
                <hr />
                <h3>{this.props.info.title}</h3>

                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem
                        active={category.categoryName===this.props.info.clickedLink?true:false}
                            action
                            tag="button"
                            onClick={() => this.props.info.changeSelectedLink(category)}
                            key={category.id}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <br />
                <br />
                {/* <p><b>{this.props.info.clickedLink}</b></p> */}
                <hr />
            </div>
        )
    }
}
