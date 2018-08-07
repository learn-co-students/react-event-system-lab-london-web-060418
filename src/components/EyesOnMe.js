// Code EyesOnMe Component Here
// Code Keypad Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {

    //methods

    return (
      <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')} />
    ) //end of return
  } //end of render

} //end of keypad class

export default EyesOnMe
