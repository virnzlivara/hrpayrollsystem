import React, { Component } from 'react';
import TextField from './fields/TextField';
import CheckBoxField from './fields/CheckBoxField';
import Button from './fields/Button';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <TextField label="Username" placeholder="Username"/>
        <TextField label="Password" placeholder="Password"/>
        <CheckBoxField checked="true"/>
        <Button content="Login" variant="green" />
      </div>
    );
  }
}

export default Login;
