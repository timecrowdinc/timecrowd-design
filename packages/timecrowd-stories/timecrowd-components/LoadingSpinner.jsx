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
      'loading-spinner-lowkey': color === 'lowkey',
      'loading-spinner-inverse': color === 'inverse',
      'absolute-center': position === 'absolute-center',
    }

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
  size: PropTypes.oneOf(['textsize', 'sm', 'md', 'lg']),
  position: PropTypes.oneOf(['normal', 'absolute-center']),
  color: PropTypes.oneOf(['normal', 'lowkey', 'inverse']),
}

LoadingSpinner.defaultProps = {
  tag: 'span',
  size: 'textsize',
  position: 'normal',
  color: 'normal',
}

export default LoadingSpinner
