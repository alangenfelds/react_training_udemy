import React, { Component } from "react";
// import logo from './logo.svg';
import classes from "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "hgf3s", name: "Artur", age: 39 },
      { id: "f6jn3", name: "Andrey", age: 9 },
      { id: "097h4", name: "Izabella", age: 2 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // copy whole array old way ES5
    // const persons = this.state.persons.slice(0);
    // OR with
    // ES6 spread operator
    const persons = [...this.state.persons];

    //delete 1 element starting from personIndex
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (event, id) => {
    // 1. FIND PERSON'S INDEX IN ARRAY
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // ES5 option to copy object from array
    // const person = Object.assign({}, this.state.persons[personIndex]);

    //ES6
    // 2. Copy person from original array
    const person = {
      ...this.state.persons[personIndex]
    };

    // 3. update persons name
    person.name = event.target.value;

    // 4. copy all persons from original array
    const persons = [...this.state.persons];

    // 5. update original person with updated person
    persons[personIndex] = person;

    // 6. update state with updated person
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
