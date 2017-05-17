import React, { PureComponent } from 'react'

const Header = (props) => {
    return(
      <header className="top">
        <h1>catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          day</h1>
        <h3 className="tagLine"><span>{props.tagLine}</span></h3>

      </header>
    )
}

export default Header
