import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Add extends Component {
    constructor(props) {
        super(props);
        this.saveAction.bind(this);
        this.state = { show: false };
    }
    getInitialState() {
        return { show: false };
    }
    saveAction() {
        var val = { name: this.refs.nameInput.value, age: this.refs.ageInput.value };
        this.props.add(val);
        this.setState({ show: false });
    }

    render() {
        let close = () => this.setState({ show: false });

        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    ADD
          </Button>

                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Add a person </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <span > name:</span>
                            <input type="text" placeholder="person's name" ref="nameInput" />
                            <span >Age:</span>  <input type="number" placeholder="person's age" ref="ageInput" /> {''}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={close}>Cancel</Button>
                        <Button onClick={this.saveAction.bind(this)}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default Add;
