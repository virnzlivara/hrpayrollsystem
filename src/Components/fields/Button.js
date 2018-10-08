import React, { Component } from 'react';


class Button extends Component {
  sayHi() {
    alert('hi');
  }
  render() {
    console.log(this.props);
    const {
      variant,
      content,
      ...others
    } = this.props;
    return (
      <button className={variant} {...others} onClick={this.props.onclickfunction}>
      {content}
      </button>
    );
  }
}

export default Button;
