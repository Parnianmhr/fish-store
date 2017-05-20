import React, { PureComponent } from 'react'

class Fish extends PureComponent {
  render() {
  const { details } = this.props
    return(
      <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className=""></h3>
      </li>
    )
  }
}

export default Fish
