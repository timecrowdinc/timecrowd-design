import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

class TaskInline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      task,
      tag,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'task task-inline',
      className,
    )

    return (
      <Tag {...attributes} className={classes}>
        <div className="task-block">
          <span className="task-title">{task.title}</span>
          <div className="task-meta">
            <span className="task-category">
              <i className={['category-circle', 'category-' + task.category.color].join(' ')} />
              {task.category.title} - {task.team.name}
            </span>
          </div>
        </div>
      </Tag>
    )
  }
}

TaskInline.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  task: PropTypes.object.isRequired,
}

TaskInline.defaultProps = {
  tag: 'div',
}

export default TaskInline
