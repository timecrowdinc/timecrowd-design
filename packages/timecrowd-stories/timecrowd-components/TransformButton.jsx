import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'
import LoadingSpinner from './LoadingSpinner.jsx'

class TransformButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'transform-button btn btn-primary',
      className,
      {
        waiting: this.props.status === 'waiting',
        success: this.props.status === 'success',
      }
    )

    return (
      <Tag {...attributes} className={classes}>
        <LoadingSpinner />
        <i className="dripicons-checkmark loading-end" />
        {children}
      </Tag>
    )
  }
}

TransformButton.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

TransformButton.defaultProps = {
  tag: 'button',
}

export default TransformButton
