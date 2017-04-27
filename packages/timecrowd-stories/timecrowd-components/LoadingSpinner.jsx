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

    const classes = mapCssClasses(
      'loading-spinner',
      className,
      {
        'loading-spinner-sm': this.props.size === 'sm',
        'loading-spinner-lg': this.props.size === 'lg',
        'absolute-center': this.props.absoluteCenter,
        colored: this.props.colored,
      }
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
  colored: PropTypes.bool,
}

LoadingSpinner.defaultProps = {
  tag: 'span',
  colored: true,
}

export default LoadingSpinner
