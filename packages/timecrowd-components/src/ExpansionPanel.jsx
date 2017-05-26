import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class ExpansionPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expand: this.props.expand
    }

    this.toggle = this.toggle.bind(this)
  }

  getChildContext() {
    return {
      toggle: this.toggle,
      expand: this.state.expand,
    }
  }

  toggle() {
    if (this.props.toggle) {
      return this.props.toggle()
    }

    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    const {
      className,
      children,
      tag,
      expand,
      toggle,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'panel expansion-panel',
      className,
      {
        expand: this.state.expand,
        shrink: !this.state.expand,
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
  expand: PropTypes.bool,
}

ExpansionPanel.defaultProps = {
  tag: 'div',
  expand: false,
}

ExpansionPanel.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired,
}

export default ExpansionPanel
