import React, { Component } from 'react';
import Header from './components/Header'
import Order from './components/Order'
import Inventory from './components/Inventory'
import Fish from './components/Fish'
import sampleFishes from './sampleFishes'
import base from './base'


class App extends Component {
  constructor() {
    super()

    //initial states
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
    {
      context: this,
      state: 'fishes'
    });
    //check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`oredr-${this.props.params.storeId}`)

    if(localStorageRef) {
      //update our app component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('something changed!')
    console.log({nextProps, nextState})
    localStorage.setItem(`order-${this.props.params.storeId}`,
    JSON.stringify(nextState.order))
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

  addToOrder(key) {
    //take a copy of our order state
    const order = {...this.state.order}
    //update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1
    //update our satet
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh seefood Market"/>
          <ul className="list-of-fishes">
            {Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} index={key}
              details={this.state.fishes[key]} addToOrder={this.addToOrder.bind(this) }/>)}
          </ul>
        </div>
        <Order fishes={this.state.fishes}
               order={this.state.order}
               params={this.props.params}
               />
        <Inventory addFish={ this.addFish.bind(this)}
                   loadSamples={ this.loadSamples.bind(this)}
                   fishes={this.state.fishes}
                   />
      </div>
    );
  }
}

export default App;
