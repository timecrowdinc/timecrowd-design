import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'
import { TaskEdit } from './index'

class TimelineEntry extends Component {
  constructor(props) {
    super(props)

    // モックなのでstateで済ます
    this.state = {
      open: false
    }
  }

  render() {
    const {
      className,
      children,
      tag,
      open,
      top,
      height,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'timeline-item timeline-entry',
      className,
      {
        'open': this.state.open
      }
    )

    return (
      <Tag {...attributes} className={classes} style={{
        top: top,
        height: this.state.open ? 'auto' : height,
        zIndex: this.state.open ? 1000000 : 100,
      }}
      onClick={() => {
        this.setState({
          open: !this.state.open
        })
      }}>
        {!this.state.open && (<div style={{height: "100%"}}>{children}</div>)}
        {this.state.open && (
          <TaskEdit task={{
                                      title: 'Test name',
                                      team: {
                                        name: 'Test Team'
                                      },
                                      category: {
                                        title: 'Test Category',
                                        color: 0,
                                        team: {
                                          name: 'Test Team'
                                        },
                                      }
                                    }} />
        )}
      </Tag>
    )
  }
}

TimelineEntry.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
}

TimelineEntry.defaultProps = {
  tag: 'div',
  open: false,
}

export default TimelineEntry
