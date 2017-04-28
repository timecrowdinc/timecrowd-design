import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class CustomCheck extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.substanceInput.indeterminate = this.props.indeterminate
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.substanceInput.indeterminate = this.props.indeterminate
    }
  }

  render() {
    const {
      className,
      children,
      tag,
      checked,
      disabled,
      onClick,
      ...attributes,
    } = this.props

    const Tag = tag

    const conditionals = {
      'checked': this.props.checked,
      'disabled': this.props.disabled,
      'indeterminate': this.props.indeterminate,
    }

    const classes = mapCssClasses(
      'custom-control custom-checkbox',
      className,
      conditionals,
    )

    return (
      <Tag className={classes} onChange={onClick}>
        <input type="checkbox" ref={(input) => { this.substanceInput = input }} className="custom-control-input" defaultChecked={checked} disabled={disabled} />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">{children}</span>
      </Tag>
    )
  }
}

CustomCheck.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onClick: PropTypes.func,
}

CustomCheck.defaultProps = {
  tag: 'label',
  checked: false,
  indeterminate: false,
}

export default CustomCheck
