// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

  render() {
    return(
      <input type="password" name="password" onKeyUp={this.keyUpHandler} />
    )
  }

  keyUpHandler = () => {
    console.log("Entering password...")
  }


}
