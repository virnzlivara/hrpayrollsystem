import React, { Component } from 'react';


class CheckBoxField extends Component {
  handleCheck() {
    // this.setState({checked: !this.state.checked});
  }
  render() {
    var label = this.props.label || "Remember me"
    var msg;
    console.log(this.state)
    // if (this.state.checked) {
      msg = "checked";
    // } else {
      // msg = "unchecked";
    // }
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheck} defaultChecked={msg}/>
        {label}
      </div>
    );
  }
}

export default CheckBoxField;
