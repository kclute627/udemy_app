import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'





class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Kyle', age: 31 },
      { id: 'vasdf1', name: 'Lauren', age: 35 },
      { id: 'asdf11', name: 'Hudson', age: 10 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    

    let persons = null;
   

    if ( this.state.showPersons ) {
      
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>;

    }


    




    return (
      
      <div className={classes.App}>
        <Cockpit 
        showPersons = {this.state.showPersons}
        persons={this.state.persons}
        toggle={this.togglePersonsHandler}
        appTitle={this.props.title}/>
        {persons}
      </div>
      
    );
   
  }
}

export default App;
