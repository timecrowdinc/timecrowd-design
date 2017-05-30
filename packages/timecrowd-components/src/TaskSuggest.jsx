import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'
import { Icon, CategoryCircleIcon, LoadingSpinner } from './index'

class TaskSuggest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: -1
    }

    this.formatSuggestedTitle = this.formatSuggestedTitle.bind(this)
  }

  formatSuggestedTitle(title, keyword) {
    // FIXME: 応急処置なので原因を確かめてちゃんと直す
    if (keyword === void 0) {
      return
    }
    // FIXME: 正規表現でJSXをうまく出力する方法がわからなかった
    let pos = 0
    let klen = keyword.length
    return title.toLowerCase()
      .split(keyword)
      .map((word) => {
        pos = pos + word.length + klen
        return [word, (<strong>{title.substring(pos - klen, pos)}</strong>)]
      })
  }

  render() {
    const {
      className,
      children,
      tag,
      tasks,
      keyword,
      isLastPage,
      pagination,
      loading,
      selectTaskFromSuggestions,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'task-suggest',
      className,
    )

    return (
      <Tag {...attributes} className={classes}>
        <div
          className="list-group"
          onMouseOut={() => {
            this.setState({
              active: -1
            })
          }}
        >
          {tasks.map((task, index) => {
            return (
              <div
                className={['list-group-item', (this.state.active === index) ? 'active' : ''].join(' ')}
                //key={task.id}
                onClick={(e) => {
                  selectTaskFromSuggestions(task)
                }}
                onMouseOver={() => {
                  this.setState({
                    active: index
                  })
                }}
              >
                <div className="task-inline">
                  <div className="task-block">
                    <span className="task-title">
                      {this.formatSuggestedTitle(task.title, keyword)}
                    </span>
                    <div className="task-meta">
                      <div className="task-category">
                        <CategoryCircleIcon color={task.category.color} />
                        <span className="task-category-title">{task.category.title} - {task.team.name}</span>
                      </div>
                      {task.state === 'closed' && (
                        <div className="task-status">
                          <Icon className="mr-1" name="checkmark" size="sm" />
                          完了済
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {keyword && loading && (
            <div className="list-group-item">
              <div className="task-inline">
                <LoadingSpinner />
              </div>
            </div>
          )}
        </div>
        {keyword && !isLastPage && tasks.length > 0 && (
          <a className="btn btn-link btn-sm btn-block text-left pt-1 pb-1" onClick={pagination}>さらに読み込む</a>
        )}
      </Tag>
    )
  }
}

TaskSuggest.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  tasks: PropTypes.array,
  keyword: PropTypes.string,
  isLastPage: PropTypes.bool,
  pagination: PropTypes.func,
  loading: PropTypes.bool,
  selectTaskFromSuggestions: PropTypes.func,
}

TaskSuggest.defaultProps = {
  tag: 'div',
  tasks: [],
}

export default TaskSuggest
