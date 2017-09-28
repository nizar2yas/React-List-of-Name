import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SkyLight from 'react-skylight';
import Trigger from './Edit.js'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { person: props.person };
    }
    saveAction(val) {
        // var person = { name: this.refs.nameInput.value, age: this.refs.ageInput.value };
        this.setState({
            person: val
        }, function () {
            this.props.save(this.state.person);
        });
    }
    render() {
        return (
            <div >
                <p>Detail</p>
                <p> name:  {this.state.person.name}</p>
                <p> Age:  {this.state.person.age}</p>
                <button><Link to='/' >Back</Link></button>
                <Trigger person={this.state.person} save={this.saveAction.bind(this)} />
            </div >
        )
    }
}
export default Detail;