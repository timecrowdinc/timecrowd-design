import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses, bootstrapContextuals } from './utils'
import CustomCheck from './CustomCheck.jsx'

class ListGroupItemCheck extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      active,
      disabled,
      color,
      action,
      checked,
      onChange,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'list-group-item list-group-item-check',
      className,
      {
        'active': active,
        'disabled': disabled,
        'list-group-item-action': action,
        ['list-group-item-' + color]: true,
        'checked': checked,
      }
    )

    return (
      <Tag {...attributes} className={classes}>
        <CustomCheck disabled={disabled} checked={checked} onChange={onChange}>
          {children}
        </CustomCheck>
      </Tag>
    )
  }
}

ListGroupItemCheck.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(bootstrapContextuals),
  action: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

ListGroupItemCheck.defaultProps = {
  tag: 'li',
  color: 'normal',
  active: false,
  disabled: false,
  action: true,
  checked: false,
}

export default ListGroupItemCheck
