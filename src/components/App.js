import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PersonsList from './PersonsList.js';
import Details from './Details.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPerson: '', filter: '', persons: this.props.persons };
  };
  handlSelection(p) {
    this.setState({
      selectedPerson: p
    })
  };
  handleSave(value) {
    this.state.persons.map(p => {
      if (p.id === value.id) {
        p.name = value.name;
        p.age = value.age;
      }
      return p;
    })
  };
  handleAdd(value){
    var id =this.state.persons.length;
    id++;
    var person={id:id, name:value.name, age:value.age};
    this.state.persons.push(person);
    this.setState({persons:this.state.persons});
  };

  render() {
    return (
      <div>
        <nav>
          <Switch>
            <Route exact path='/'
              render={(props) => (<PersonsList add={this.handleAdd.bind(this)} selectPerson={this.handlSelection.bind(this)} persons={this.state.persons} />)} />
            <Route path='/detail/'
              render={(props) => (<Details save={this.handleSave.bind(this)} person={this.state.selectedPerson} />)} />
          </Switch>
        </nav>
      </div>
    )
  }
}
export default App;