import React, { Component } from 'react'
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
    state = {
        links: [
            { linkId: 1, linkName: "Education" },
            { linkId: 2, linkName: "Certificate" },
            { linkId: 3, linkName: "Works" }
        ],
    }

    render() {
        return (
            <div>
                <hr />
                <h3>{this.props.info.title}-{this.props.info.clickedLink}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Stock
                            </th>
                            <th>
                                Cart
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(item => (
                            <tr key={item.id}>
                                <th scope="row">
                                    {item.id}
                                </th>
                                <td>
                                    {item.productName}
                                </td>
                                <td>
                                    {item.unitPrice}
                                </td>
                                <td>
                                    {item.unitsInStock}
                                </td>
                                <td>
                                    <Button
                                        color="primary"
                                        onClick={()=>this.props.addToCart(item)}
                                    >
                                        Add
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <hr />
            </div>
        )
    }
}
