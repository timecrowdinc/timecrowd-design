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
      ...attributes,
    } = this.props

    const Tag = tag

    const conditionals = {
      'loading-spinner-sm': this.props.size === 'sm',
      'loading-spinner-md': this.props.size === 'md',
      'loading-spinner-lg': this.props.size === 'lg',
      'absolute-center': this.props.absoluteCenter,
    }
    conditionals[this.props.color] = true

    const classes = mapCssClasses(
      'loading-spinner',
      className,
      conditionals,
    )

    return (
      <Tag {...attributes} className={classes}>
      </Tag>
    )
  }
}

LoadingSpinner.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  absoluteCenter: PropTypes.string,
  color: PropTypes.string,
}

LoadingSpinner.defaultProps = {
  tag: 'span',
  color: 'normal',
}

export default LoadingSpinner
