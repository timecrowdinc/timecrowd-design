import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class ActionBar extends Component {
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
      'action-bar',
      className,
    )

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    )
  }
}

ActionBar.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

ActionBar.defaultProps = {
  tag: 'div',
}

export default ActionBar
