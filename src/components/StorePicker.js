import React, { PureComponent } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends PureComponent {
  goToStore(event) {
    event.preventDefault();
    //grab the text from the box
    console.log(this.storeInput.value)
    //transition form to store page

  }

  render() {
    return(
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name"
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store --></button>
      </form>
    )
  }
}

export default StorePicker
