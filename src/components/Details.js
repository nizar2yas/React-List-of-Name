import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit.js'
import { Button } from 'react-bootstrap';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { person: props.person };
    }
    saveAction(val) {
        this.setState({
            person: val
        }, function () {
            this.props.save(this.state.person);
        });
    }
    render() {
        return (
            <div >
                <h2>Detail</h2>
                <h3> name:  {this.state.person.name}</h3>
                <h3> Age:  {this.state.person.age}</h3>
                <Button ><Link to='/' >Back</Link></Button>
                <Edit person={this.state.person} save={this.saveAction.bind(this)} />
            </div >
        )
    }
}
export default Detail;
