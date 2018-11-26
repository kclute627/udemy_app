import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'





class App extends PureComponent {
    constructor(props){
      super(props);
      console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount(){
      console.log('[App.js] Inside ComponentWillMount()');
    }

    componentDidMount(){
      console.log('[APP.js] Inside Component Did Mount');
    }
    // shouldComponentUpdate(nextProps, nextState){
    //   console.log('[UPDATE APP.js] Inside shouldComponentUpdate()', nextProps, nextState)
  
    //   return nextState.persons !== this.state.persons || 
    //   nextState.showPersons !== this.state.showPersons;

    // }
  
    componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js] Inside componentWillMount()', nextProps, nextState);
    }
  
    componentDidUpdate(){
      console.log('[UPDATE App.js] Inside componentDidUpdate()')
    }

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
    console.log('[APP.js] Inside Render ')
    

    let persons = null;
   

    if ( this.state.showPersons ) {
      
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>;

    }


    




    return (
      
      <div className={classes.App}>
        <button 
        onClick={()=>{
          this.setState({showPersons: true})
        }}>Show Persons</button>
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
