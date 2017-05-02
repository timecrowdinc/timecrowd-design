import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class CustomRadio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      checked,
      disabled,
      onChange,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'custom-control custom-radio',
      className,
      {
        checked: this.props.checked,
        disabled: this.props.disabled,
      }
    )

    return (
      <Tag {...attributes} className={classes} onChange={onChange}>
        <input type="radio" name="radio" className="custom-control-input" defaultChecked={checked} disabled={disabled} />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">{children}</span>
      </Tag>
    )
  }
}

CustomRadio.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

CustomRadio.defaultProps = {
  tag: 'label',
  checked: false,
}

export default CustomRadio
