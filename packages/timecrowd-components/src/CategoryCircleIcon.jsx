import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class CategoryCircleIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      color,
      ...attributes,
    } = this.props

    const Tag = tag

    let conditionals = {}
    conditionals['category-' + color] = true

    const classes = mapCssClasses(
      'category-circle',
      className,
      conditionals,
    )

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

CategoryCircleIcon.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.number,
}

CategoryCircleIcon.defaultProps = {
  tag: 'i',
  color: 0,
}

export default CategoryCircleIcon
