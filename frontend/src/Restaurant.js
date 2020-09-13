import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  
  render() {
    return (
      <div>
      <Counter/>
      {this.props.name}
      </div> 
    )
  }
}

export default App
