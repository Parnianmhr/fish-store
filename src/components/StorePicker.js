import React, { PureComponent } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends PureComponent {
  render() {
    return(
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker
