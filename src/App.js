import React, { Component } from 'react';
import Login from './Components/Login';
import EmployeeForm from './Components/EmployeeForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users : [
        {
          username : 'admin',
          password : '123456'
        },
        {
          username : 'employee',
          password : '123456'
        }

      ]
    }

  }
  render() {
    return (
      <div className="App">
        <EmployeeForm>
        </EmployeeForm>
      </div>
    );
  }
}

export default App;
