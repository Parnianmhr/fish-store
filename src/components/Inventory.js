import React, { PureComponent } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends PureComponent {

  render() {
    return(
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
      </div>
    )
  }
}

export default Inventory
