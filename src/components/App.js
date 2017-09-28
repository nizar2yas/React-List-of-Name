import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PersonsList from './PersonsList.js';
import Details from './Details.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPerson: '', filter: '' };
  };
  handlSelection(p) {
    this.setState({
      selectedPerson: p
    })
  };
  handleSave(value){

  };

  render() {
    return (
      <nav>
        <Switch>
          <Route exact path='/'
            render={(props) => (<PersonsList selectPerson={this.handlSelection.bind(this)} persons={this.props.persons} />)} />
          <Route path='/detail/' 
          render={(props) => (<Details save={this.handleSave.bind(this)} test={this.state.selectedPerson} />)} />
        </Switch>
      </nav>
    )
  }
}
export default App;