// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  render() {
    return(
      <button onBlur={this.blurHandler} onFocus={this.focusHandler}></button>
    )
  }

  blurHandler = () => {
    console.log("Hey! Eyes on me!")
  }

  focusHandler = () => {
    console.log("Good!")
  }


}
