import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class PanelBody extends Component {
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
      'panel-body',
      className,
    )

    return (
      <Tag {...attributes} className={classes} aria-hidden={!this.context.isExpand}>
        {children}
      </Tag>
    )
  }
}

PanelBody.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

PanelBody.defaultProps = {
  tag: 'div',
}

PanelBody.contextTypes = {
  toggle: PropTypes.func.isRequired,
  isExpand: PropTypes.bool.isRequired,
}

export default PanelBody
