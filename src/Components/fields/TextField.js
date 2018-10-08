import React, { Component } from 'react';


class TextField extends Component {
  render() {
    var label = this.props.label || 'Label'
    var text = this.props.placeholder || 'Nothing yet'
    return (
      <div className="TextField">
        { label }
        <input placeholder = {text}/>
      </div>
    )
  }
}

export default TextField;
