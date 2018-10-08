import React, { Component } from 'react';
import TextField from './fields/TextField';
import Button from './fields/Button';

class EmployeeForm extends Component {
  render() {
    return(
      <div className="EmployeeForm">
        <div className="EmployeePersonalInformation">
          Personal Information:
          <TextField label="Last Name" placeholder="Username"/>
          <TextField label="First Name" placeholder="Username"/>
          <TextField label="Middle Name" placeholder="Username"/>
          <TextField label="Suffice(Jr, III)" placeholder="Username"/>
          <TextField label="Birthdate" placeholder="Username"/>
        </div>
        <Button content = {"Save"} onclickfunction={this.onEmployeeSave.bind(this)}></Button>
        <Button content= {"Delete"} onclickfunction={this.onEmployeeDelete.bind(this)}></Button>
      </div>
    );
  }

  onEmployeeSave(){
    alert("Save Employee")
  }

  onEmployeeDelete(){
    alert("Delete Employee")
  }
}

export default EmployeeForm;
