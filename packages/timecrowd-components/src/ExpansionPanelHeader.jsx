import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'
import Icon from './Icon.jsx'

class ExpansionPanelHeader extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleClickHeader = this.handleClickHeader.bind(this)
    this.handleClickToggle = this.handleClickToggle.bind(this)
  }

  toggle() {
    this.context.toggle()
  }

  handleClickHeader(e) {
    e.preventDefault()
    this.toggle()
  }

  handleClickToggle(e) {
    e.stopPropagation()
    e.preventDefault()
    this.toggle()
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
      'panel-header expansion-panel-header',
      className,
    )

    const iconName = this.context.isExpand ? 'chevron-up' : 'chevron-down'

    return (
      <Tag {...attributes} className={classes} onClick={this.handleClickHeader}>
        {children}
        <button type="button" className="dropdown-toggler" onClick={this.handleClickToggle}>
          <Icon name={iconName} size="md" />
        </button>
      </Tag>
    )
  }
}

ExpansionPanelHeader.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

ExpansionPanelHeader.defaultProps = {
  tag: 'div',
}

ExpansionPanelHeader.contextTypes = {
  toggle: PropTypes.func.isRequired,
  isExpand: PropTypes.bool.isRequired,
}

export default ExpansionPanelHeader
