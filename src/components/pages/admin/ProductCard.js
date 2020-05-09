import React, { Component } from 'react'
import { Form, Button, Alert, Modal, Card } from "react-bootstrap";
export default class ProductCard extends Component {
    render() {
        return (
            <div>
                {this.props.allProducts.map(prod =>
                    <div className="col-sm-4" key={prod.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={prod.img_url} />
                            <Card.Body>
                                <Card.Title>{prod.name}</Card.Title>
                                <Card.Text>
                                    Price: Rs {prod.price}<br />
                                    Category: {prod.category}<br />
                                </Card.Text>
                                <Button variant="outline-success" onClick={() => this.handleShowHide(true, this.handleValueToSend.bind(this, "edit", prod))}>
                                    Edit
                                        </Button>
                                <Button variant="outline-danger">Delete</Button>
                            </Card.Body>
                        </Card></div>)}
            </div>
        )
    }
}
