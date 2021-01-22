import React from 'react'
import PropTypes from 'prop-types'

const anotherComponent = props => {
  return (
    <div>
      This is anotherComponent
      {props.text}
    </div>
  )
}

anotherComponent.propTypes = {
  text: PropTypes.string
}

export default anotherComponent

