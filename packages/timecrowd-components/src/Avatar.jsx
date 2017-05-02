import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses, bootstrapContextuals, bootstrapSizes } from './utils'

class Avatar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      image,
      alt,
      title,
      size,
      color,
      active,
      disabled,
      onClick,
      ...attributes,
    } = this.props

    const Tag = tag

    let conditionals = {
      ['avatar-' + color]: true,
      ['avatar-' + size]: true,
      'active': active,
      'disabled': disabled,
      'default-image': image === '',
    }

    const classes = mapCssClasses(
      'avatar',
      className,
      conditionals,
    )

    return (
      <Tag {...attributes} className={classes} onClick={onClick}>
        { image !== '' && (
          <img className="avatar-image" src={image} alt={alt} title={title} />
        )}
        {children}
      </Tag>
    )
  }
}

Avatar.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(bootstrapSizes),
  color: PropTypes.oneOf(bootstrapContextuals),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Avatar.defaultProps = {
  tag: 'div',
  image: '',
  alt: '',
  title: '',
  size: 'md',
  color: 'normal',
  active: false,
  disabled: false,
}

export default Avatar
