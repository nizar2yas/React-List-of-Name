import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Trigger extends Component {
    constructor(props) {
        super(props);
        this.saveAction.bind(this);
        this.state = {  person:this.props.person };
    }
    getInitialState() {
        return { show: false };
    }
    saveAction() {
        var val = { id:this.state.person.id, name: this.refs.nameInput.value, age: this.refs.ageInput.value };
        this.setState({
            person:val
        },function(){
            this.props.save(this.state.person)
        });
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
                    Edit
          </Button>

                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Edit {this.props.person.name}'s details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            name:
                        <input type="text" defaultValue={this.state.person.name} ref="nameInput" />
                            Age:  <input type="text" defaultValue={this.state.person.age} ref="ageInput" /> {''}
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

export default Trigger;