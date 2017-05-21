import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'
import TimelineEntry from './TimelineEntry.jsx'
import TaskInline from './TaskInline.jsx'

class Timeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      subdivisions,
      divisionHeight,
      entries,
      addEntry,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'timeline',
      className,
    )

    const hours = [...Array(24).keys()].map((hour) => {
      return (hour < 10) ? '0' + hour : hour.toString()
    })

    return (
      <Tag {...attributes} className={classes}>
        { hours.map((hour, index) => {
          return (
            <div className={['timeline-hour', 'timeline-hour-' + index].join(' ')}>
              <div className="timeline-hour-header">
                <span className="timeline-hour-label">{hour}</span>
              </div>
              <div className="timeline-hour-body">
                { [...Array(subdivisions).keys()].map((item, subindex) => {
                  return (
                    <div
                      className="timeline-division"
                      style={{
                        height: divisionHeight
                      }}
                      onClick={() => {
                        let fakeEntry = {
                          started_at: (hour * 60 + (60 / subdivisions * subindex)) * 60000 - (9 * 3600000),
                          duration: (60 / subdivisions) * 60,
                          task: {
                            title: 'Test name',
                            category: {
                              name: 'Test Category',
                              index: 0
                            }
                          }
                        }
                        addEntry(fakeEntry)
                      }}
                    />
                  )
                }) }
              </div>
            </div>
          )
        }) }
        {
          entries.map((entry) => {
            const started = new Date(entry.started_at)
            const hTop = started.getHours() * subdivisions * divisionHeight
            const mTop = Math.floor(started.getMinutes() / (60 / subdivisions)) * divisionHeight
            const height = Math.ceil((entry.duration / 60) / (60 / subdivisions)) * divisionHeight
            return (
              <TimelineEntry top={hTop + mTop} height={height}>
                <TaskInline className="timeline-task-inline" task={entry.task} />
              </TimelineEntry>
            )
          })
        }
      </Tag>
    )
  }
}

Timeline.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  subdivisions: PropTypes.number,
  divisionHeight: PropTypes.number,
  entries: PropTypes.array,
  addEntry: PropTypes.func,
}

Timeline.defaultProps = {
  tag: 'div',
  subdivisions: 2,
  divisionHeight: 24,
  entries: [],
}

export default Timeline
