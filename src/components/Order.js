import React, { PureComponent } from 'react'
import { formatPrice } from '../helpers'

class Order extends PureComponent {

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
