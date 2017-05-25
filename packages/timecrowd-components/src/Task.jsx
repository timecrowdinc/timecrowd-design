import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exampleState: false
    }

    this.exampleFunc = this.exampleFunc.bind(this)
  }

  getChildContext() {
    return {
      exampleFunc: this.exampleFunc,
      exampleState: this.state.exampleState,
    }
  }

  exampleFunc() {
    return
  }

  render() {
    const {
      className,
      children,
      tag,
      value,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'task',
      className,
      {
        'active': this.state.exampleState
      }
    )

    return (
      <Tag {...attributes} className={classes}>
        {value}
        {children}
      </Tag>
    )
  }
}

Task.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
}

Task.defaultProps = {
  tag: 'div',
  value: 0,
}

Task.childContextTypes = {
  exampleFunc: PropTypes.func.isRequired,
  exampleState: PropTypes.bool.isRequired,
}

export default Task
