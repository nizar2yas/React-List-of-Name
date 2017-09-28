import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SkyLight from 'react-skylight';

class Detail extends Component {
    constructor(props) {
        super(props);
        var person = { name: this.props.test.name, age: this.props.test.age };
        this.state = { person: person };
    }
    saveAction() {
        var person = { name: this.refs.nameInput.value, age: this.refs.ageInput.value };
        this.setState({
            person: person
        });
        this.props.save(this.state.person)
    }
    render() {
        console.log(this.props);
        return (
            <div >
                <p>Detail</p>
                <p> name:  {this.state.person.name}</p>
                <p> Age:  {this.state.person.age}</p>
                <button><Link to='/' >Back</Link></button>
                <button onClick={() => this.simpleDialog.show()}>Edit</button>
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Edit">
                    <form>
                        <p>Detail</p>
                        name:
                        <input type="text" defaultValue={this.state.person.name} ref="nameInput" />
                        Age:  <input type="text" defaultValue={this.state.person.age} ref="ageInput" /> {''}
                        <button onClick={this.saveAction.bind(this)}>Save</button>
                    </form>
                </SkyLight>
            </div >
        )
    }
}
export default Detail;