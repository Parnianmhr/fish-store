import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    return(
      <header className="top">
        <h1>catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          day</h1>
        <h3 className="tagLine"><span>{this.props.tagLine}</span></h3>

      </header>
    )
  }
}

export default Header
