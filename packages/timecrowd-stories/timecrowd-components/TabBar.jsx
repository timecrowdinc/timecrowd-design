import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class TabBar extends Component {
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
      'tabbar',
      className,
      {}
    )

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    )
  }
}

TabBar.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

TabBar.defaultProps = {
  tag: 'div',
}

export default TabBar
