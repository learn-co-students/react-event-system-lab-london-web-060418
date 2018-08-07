// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  handleKeyUp = (e) => {
    console.log('Entering password...');
  }

  render() {

    //methods

    return (
      <input type="password" onKeyUp={(e) => this.handleKeyUp(e)}/>
    ) //end of return
  } //end of render

} //end of keypad class

export default Keypad
