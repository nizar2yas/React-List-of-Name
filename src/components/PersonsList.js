import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search.js';
import Add from './Add.js';

class PersonsList extends Component {
    constructor(props) {
        super(props);
        this.handlSelection = this.handlSelection.bind(this);
        this.state = { filter: '' };
    }
    handlSelection(p) {
        this.props.selectPerson(p);
    }
    handleFilter(val) {
        this.setState({
            filter: val
        })
    }
    handleAdd(value){
        this.props.add(value)
      };
    render() {
        const persons_list = this.props.persons.filter(person=>{
            return person.name.toLowerCase().indexOf(this.state.filter.toLowerCase())>=0;
        })
        .map(p => (
            <li key={p.id} onClick={() => this.handlSelection(p)}><Link to='/detail' >{p.name}</Link></li>)
        );
        return (
            <div>
                <div>
                    <Search handleFilter={this.handleFilter.bind(this)} />{''}
                </div>
                <nav>
                    <ul>
                        {persons_list}
                    </ul>
                </nav>
                <Add  add={this.handleAdd.bind(this)} />
            </div>
        )
    }
}
export default PersonsList;