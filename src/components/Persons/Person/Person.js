import React, {Component} from "react";
import PropTypes from 'prop-types';

import classes from "./Person.css";
// import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/_Aux';
import withClass from '../../../hoc/WithClassV2';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor', props);
  }
  
  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
  }


  render() {
    console.log('[Person.js] inside render');
    return (
      <Aux>
       {/* <WithClass classes= {classes.Person}> */}
       {/* <div className={classes.Person}> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />
       {/* </div> */}
      {/* </WithClass> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
