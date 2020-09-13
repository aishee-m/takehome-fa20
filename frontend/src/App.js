import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ]
    }
    this.state = {
      inputValue: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Counter count = {this.props.count}/>
        <Instructions complete = {true} />
        <input newRestaurant = {this.state.inputValue} onChange={evt=>this.updateInputValue(evt)} />
        {this.state.restaurants.map(x => (
        <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
         <button onClick= {this.setState((prevState) => ({restaurants: [prevState.restaurants, newRestaurant]}))} />
      </div>
    )
  }
  updateInputValue(evt) {
          this.setState({
          inputValue: evt.target.value
          })
        }
}

export default App
