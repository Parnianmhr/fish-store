import React, { Component } from 'react';
import Header from './components/Header'
import Order from './components/Order'
import Inventory from './components/Inventory'


class App extends Component {
  constructor() {
    super()

    //initial states
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    //update the state
    const fishes = {...this.state.fishes}
    // add in our new fish
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    //set satet
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh seefood Market"/>
        </div>
        <Order />
        <Inventory addFish={ this.addFish.bind(this) }/>
      </div>
    );
  }
}

export default App;
