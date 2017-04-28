import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

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
      'textsize': size === 'textsize',
      'sm': size === 'sm',
      'md': size === 'md',
      'lg': size === 'lg',
      'normal': color === 'normal',
      'primary': color === 'primary',
      'secondary': color === 'secondary',
      'info': color === 'info',
      'success': color === 'success',
      'warning': color === 'warning',
      'danger': color === 'danger',
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
          <img src={image} alt={alt} title={title} />
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
  size: PropTypes.oneOf(['textsize', 'sm', 'md', 'lg']),
  color: PropTypes.oneOf(['normal', 'primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Avatar.defaultProps = {
  tag: 'div',
  image: '',
  alt: '',
  title: '',
  size: 'textsize',
  color: 'normal',
  active: false,
  disabled: false,
}

export default Avatar
