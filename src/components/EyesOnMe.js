import React, { Component } from 'react';

class EyesOnMe extends Component {

  focusHandle = () => {
    console.log("Good!")
  }

  blurHandle = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusHandle} onBlur={this.blurHandle} >onFocus/onBlur</button>
    )
  }

}

export default EyesOnMe;
