import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class ExpansionPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpand: this.props.isExpand
    }

    this.toggle = this.toggle.bind(this)
  }

  getChildContext() {
    return {
      toggle: this.toggle,
      isExpand: this.state.isExpand,
    }
  }

  toggle() {
    if (this.props.toggle) {
      return this.props.toggle()
    }

    this.setState({
      isExpand: !this.state.isExpand
    })
  }

  render() {
    const {
      className,
      children,
      tag,
      isExpand,
      toggle,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'panel expansion-panel',
      className,
      {
        expand: this.state.isExpand,
        shrink: !this.state.isExpand,
      }
    )

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    )
  }
}

ExpansionPanel.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  toggle: PropTypes.func,
  isExpand: PropTypes.bool,
}

ExpansionPanel.defaultProps = {
  tag: 'div',
  isExpand: false,
}

ExpansionPanel.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isExpand: PropTypes.bool.isRequired,
}

export default ExpansionPanel
