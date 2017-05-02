import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses, bootstrapContextuals, bootstrapSizes } from './utils'

class Icon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      tag,
      name,
      size,
      color,
      inverse,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'icon',
      className,
      {
        ['tc-' + name]: true,
        ['icon-' + size]: true,
        ['icon-' + color]: true,
        'icon-inverse': inverse,
      }
    )

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Icon.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(bootstrapSizes),
  inverse: PropTypes.bool,
  color: PropTypes.oneOf(bootstrapContextuals),
}

Icon.defaultProps = {
  tag: 'i',
  size: 'textsize',
  color: 'normal',
}

export default Icon
