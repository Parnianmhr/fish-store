import React, { Component } from 'react';
import Header from './components/Header'
import Order from './components/Order'
import Inventory from './components/Inventory'
import Fish from './components/Fish'
import sampleFishes from './sampleFishes'


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

  loadSamples() {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh seefood Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key}
              details={this.state.fishes[key] }/>)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={ this.addFish.bind(this) } loadSamples={ this.loadSamples.bind(this) }/>
      </div>
    );
  }
}

export default App;
