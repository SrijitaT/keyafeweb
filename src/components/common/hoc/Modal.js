import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalHOC = (ModalBody, props) => {
    class CompWithModal extends Component {
        constructor(props) {
            super(props);
            this.state = { show: false, title: "", prev_title: " " }
        }
        static getDerivedStateFromProps(props, state) {
            if (props.title && (props.title !== state.prev_title)) {
                return { title: props.title, prev_title: props.title }
            }
        }
        handleShowHide = (val) => {
            this.setState({ show: val, prev_title: " " })
        }
        changeTitle = (title) => {
            this.setState({ title })
        }
        render() {
            return (
                <>
                <Link className="widget-view" variant={this.props.variant} onClick={() => this.handleShowHide(true, this.props.onClickDataPopulate)}>
                    {this.props.icon=="no" ? null : <div className="icon-area">
                        <FontAwesomeIcon icon="sign-in-alt" />
                    </div>}
                    <small className="text"> Login/Register </small>
                </Link>
                <Modal show={this.state.show} onHide={() => this.handleShowHide(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-white">
                        <ModalBody prod_det={this.props.prod_det} _id={this.props._id} changeTitle={this.changeTitle.bind(this)} />
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