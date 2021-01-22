import React from 'react'
import PropTypes from 'prop-types'

const CoolComponent = props => {
  return (
    <div>
      This is my cooooool component <br />
      {props.text}
    </div>
  )
}

CoolComponent.propTypes = {
  text: PropTypes.string
}

export default CoolComponent
