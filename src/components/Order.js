import React, { PureComponent } from 'react'
import { formatPrice } from '../helpers'

class Order extends PureComponent {

  renderOrder(key) {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    if(!fish || fish.status === 'UnAvailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available! {removeButton}</li>
    }

    return(
      <li key={key}>
        <span>{count}lbs {fish.name} {removeButton}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    const orderId = Object.keys(this.props.order)
    const total = orderId.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === "available"
      if (isAvailable) {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal
    }, 0)
    return(
      <div className="order-wrap">
        <h2>Your order</h2>
        <ul className="order">
          {orderId.map(this.renderOrder.bind(this))}
          <li className="total">
            <strong> total: </strong>
              {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order
