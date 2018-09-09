import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // let classes = ['red', 'bold'].join(' '); // "red bold"
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes = ['red','bold']
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is really wokring</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>

          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
