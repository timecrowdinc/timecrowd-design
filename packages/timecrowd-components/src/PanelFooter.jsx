import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class PanelFooter extends Component {
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
      'panel-footer',
      className,
    )

    return (
      <Tag {...attributes} className={classes} aria-hidden={!this.context.expand}>
        {children}
      </Tag>
    )
  }
}

PanelFooter.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

PanelFooter.defaultProps = {
  tag: 'div',
}

PanelFooter.contextTypes = {
  toggle: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired,
}

export default PanelFooter
