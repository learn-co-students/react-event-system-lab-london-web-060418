// Code Keypad Component Here

//The first step is always to import react

import React from 'react'

//Now what we want to do is create a class

class Keypad extends React.Component {

handleKeyUp = () =>{
  console.log('Entering password...')
}

 render(){
   return(
     <input
     type="password"
      onKeyUp = {this.handleKeyUp}/>
   )
 }
}

export default Keypad
