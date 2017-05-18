import React, { PureComponent } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends PureComponent {

  render() {
    return(
      <div>
        <h2>Inventory</h2>
        <AddFishForm />
      </div>
    )
  }
}

export default Inventory
