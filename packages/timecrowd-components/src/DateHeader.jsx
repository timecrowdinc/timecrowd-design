import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses, formatDate } from './utils'

class DateHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      date,
      total,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'date-header',
      className,
    )

    return (
      <Tag {...attributes} className={classes}>
        <span className="date-header-title">{date}</span>
        <div className="date-header-subtitle">
          <span className="text-muted">{total}</span>
        </div>
      </Tag>
    )
  }
}

DateHeader.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  total: PropTypes.string,
}

DateHeader.defaultProps = {
  tag: 'div',
  total: '未稼働',
}

export default DateHeader
