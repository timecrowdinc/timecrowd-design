import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses, bootstrapSizes } from './utils'

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
      ['loading-spinner-' + size]: true,
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
  size: PropTypes.oneOf(bootstrapSizes),
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
