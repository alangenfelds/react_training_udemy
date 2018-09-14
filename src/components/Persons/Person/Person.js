import React from "react";

import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
  // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old</p>
};

export default person;
