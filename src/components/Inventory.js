import React, { PureComponent } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends PureComponent {
  // constructor() {
  //   super()
  //   this.handleChange = this.handleChange.bind(this)
  // }
  //
  handleChange(e, key) {
    const fish = this.props.fishes[key]
    //take a copy of that fish and update it with the new data
    const updatedFish = {
    ...fish,
    [e.target.name]: e.target.value
    }
    console.log(updatedFish)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]
    return(
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish name"
          onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="price" value={fish.price} placeholder="Fish price"/>
        <select type="text" name="status" value={fish.status} placeholder="Fish status">
          <option value="Available">Fresh!</option>
          <option value="UnAvailable">Sold out!</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} placeholder="Fish desc"></textarea>
        <input type="text" name="image" value={fish.image} placeholder="Fish image"/>
      </div>
    )
  }
  render() {
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory.bind(this))}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load sample fishes</button>
      </div>
    )
  }
}

export default Inventory
