import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class LoadingSpinner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      tag,
      size,
      position,
      color,
      ...attributes,
    } = this.props

    const Tag = tag

    let conditionals = {
      'loading-spinner-sm': size === 'sm',
      'loading-spinner-md': size === 'md',
      'loading-spinner-lg': size === 'lg',
    }
    conditionals[color] = true
    conditionals[position] = true

    const classes = mapCssClasses(
      'loading-spinner',
      className,
      conditionals,
    )

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

LoadingSpinner.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.oneOf(['normal', 'absolute-center']),
  color: PropTypes.oneOf(['normal', 'lowkey', 'inverse']),
}

LoadingSpinner.defaultProps = {
  tag: 'span',
  position: 'normal',
  color: 'normal',
}

export default LoadingSpinner
