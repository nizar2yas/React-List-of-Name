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
    console.log("id:"+value.id);
    this.state.persons.map(p => {
      if (p.id === value.id) {
        p.name = value.name;
        p.age = value.age;
      }
      console.log(p);
      return p;
    })
  };

  render() {
    return (
      <nav>
        <Switch>
          <Route exact path='/'
            render={(props) => (<PersonsList selectPerson={this.handlSelection.bind(this)} persons={this.state.persons} />)} />
          <Route path='/detail/'
            render={(props) => (<Details save={this.handleSave.bind(this)} person={this.state.selectedPerson} />)} />
        </Switch>
      </nav>
    )
  }
}
export default App;