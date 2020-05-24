import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";

const ModalHOC = (ModalBody, props) => {
    class CompWithModal extends Component {
        constructor(props) {
            super(props);
            this.state = { show: false }
        }
        handleShowHide = (val) => {
            this.setState({ show: val })
        }
        render() {
            return (
                <>
                <Button variant={this.props.variant} onClick={() => this.handleShowHide(true, this.props.onClickDataPopulate)}>
                    {this.props.btnName}
                </Button>
                <Modal show={this.state.show} onHide={() => this.handleShowHide(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-white">
                        <ModalBody prod_det={this.props.prod_det} _id={this.props._id} />
                    </Modal.Body>
                    <Modal.Footer className="bg-white">
                        <Button variant="secondary" onClick={() => this.handleShowHide(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                </>
            )
        }
    }
    return CompWithModal;
}
export default ModalHOC;