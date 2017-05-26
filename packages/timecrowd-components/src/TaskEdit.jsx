import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'

import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap'
import classnames from 'classnames'
import { Icon, CategorySelector, ListGroupItemCheck, ExpansionPanel, ExpansionPanelHeader, PanelBody, Avatar } from './index'

class TaskEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tab: this.props.tab,
      task: this.props.task,
      taskCancelTo: null,
      time: null,
    }

    this.toggleTab = this.toggleTab.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.setCategory = this.setCategory.bind(this)
  }

  componentDidMount() {
    this.taskEditTitle.focus()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      taskCancelTo: Object.assign({}, nextProps.task)
    })
  }

  toggleTab(toggleTo) {
    if (this.state.tab !== toggleTo) {
      this.setState({
        tab: toggleTo
      })
    }
  }

  handleTitle(e) {
    let task = Object.assign({}, this.state.task)
    task.title = e.target.value
    this.setState({
      task: task
    })
  }

  setCategory(category) {
    let task = Object.assign({}, this.state.task)
    task.category = category
    this.setState({
      task: task
    })
  }

  render() {
    const {
      className,
      children,
      tag,
      teams,
      recentCategories,
      mode,
      tab,
      ...attributes,
    } = this.props

    const {
      task
    } = this.state

    const Tag = tag

    const classes = mapCssClasses(
      'task-edit',
      className
    )

    return (
      <Tag {...attributes} className={classes}>
        <div className="task task-edit-preview">
          <textarea
            ref={(el) => { this.taskEditTitle = el }}
            className="form-control task-edit-title"
            placeholder="タスクのタイトルを入力"
            rows={1}
            defaultValue={task.title}
            onChange={this.handleTitle}
          />
          <div className="task-meta">
            <div className="task-category">
              <i className={[
                'category-circle',
                'category-' + task.category.color
              ].join(' ')} />
              <span>{task.category.title} - {task.category.team.name}</span>
            </div>
            {this.state.time && (
              <div className="task-times">
                <Icon name="clock" className="mr-1" />
                {this.state.time}
              </div>)}
          </div>
        </div>
        <Nav tabs className="task-edit-tabs">
          <NavLink
            className={this.state.tab === 'category' ? 'active' : ''}
            onClick={() => { this.toggleTab('category') }}
          >
            <Icon name="tags" />
          </NavLink>
          <NavLink
            className={this.state.tab === 'schedule' ? 'active' : ''}
            onClick={() => { this.toggleTab('schedule') }}
          >
            <Icon name="clock" />
          </NavLink>
          {/*
          <NavLink
            className={this.state.tab === 'assign' ? 'active' : ''}
            onClick={() => { this.toggleTab('assign'); }}
          >
            <Icon name="user" />
          </NavLink> */}
          {/*
          <NavLink
            className={this.state.tab === 'other' ? 'active' : ''}
            onClick={() => { this.toggleTab('other'); }}
          >
            <Icon name="dots-3" />
          </NavLink> */}
          <div className="task-edit-controls">
            { mode === 'startAndAdd' && (
              <div>
                <Button color="link" disabled={task.title === ''}>
                  <Icon name="plus" />
                  <span className="ml-1">追加</span>
                </Button>
                <Button color="primary" disabled={task.title === ''}>
                  <Icon name="start" />
                  <span className="hidden-sm-down ml-1">開始</span>
                </Button>
              </div>
            )}
            { mode === 'onlyAdd' && (
              <div>
                <Button color="link" disabled={task.title === ''}>
                  <Icon name="plus" />
                  <span className="ml-1">追加</span>
                </Button>
              </div>
            )}
            { mode === 'edit' && (
              <div>
                <Button color="link">
                  <span>キャンセル</span>
                </Button>
                <Button color="primary" disabled={task.title === ''}>
                  <span>保存</span>
                </Button>
              </div>
            )}
          </div>
        </Nav>
        <TabContent activeTab={this.state.tab}>
          <TabPane tabId="category">
            <CategorySelector
              task={task}
              teams={teams}
              recentCategories={recentCategories}
              setCategory={this.setCategory}
            />
          </TabPane>
          <TabPane tabId="schedule">
            <div className="p-3" style={{background: '#fff'}}>
              時間編集！
              <button className="btn btn-secondary" onClick={() => {
                this.setState({
                  time: '02:00:00',
                  mode: 'onlyAdd',
                })
              }}>なにかの入力</button>
              <button className="btn btn-secondary" onClick={() => {
                this.setState({
                  time: null,
                  mode: 'startAndAdd'
                })
              }}>なにかの削除</button>
            </div>
          </TabPane>
          <TabPane tabId="assign">
            {teams.map((team) => {
              return (
                <ExpansionPanel key={team.id}>
                  <ExpansionPanelHeader>
                    <div className="panel-label">
                      <Avatar image={team.avatar} size="sm" className="mr-1" />
                      {team.name}
                    </div>
                  </ExpansionPanelHeader>
                  <div className="panel-content">
                    <PanelBody>
                      <div className="list-group">
                        {team.users.map((user) => {
                          return (
                            <ListGroupItemCheck key={user.id}>
                              <Avatar image={user.avatar} size="sm" className="mr-1" />
                              {user.name}
                            </ListGroupItemCheck>
                          )
                        })}
                      </div>
                    </PanelBody>
                  </div>
                </ExpansionPanel>
              )
            })}
          </TabPane>
          <TabPane tabId="other">
            <div className="panel p-2">
              <div className="panel-label">
                <Icon name="link" size="sm" />
                URL
              </div>
              <div>
                <input type="text" className="form-control" value={'http://example.com'} />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </Tag>
    )
  }
}

TaskEdit.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  task: PropTypes.object, // PropTypes.instanceOf(Task)
  teams: PropTypes.array,
  recentCategories: PropTypes.array,
  tab: PropTypes.oneOf(['unselect', 'category', 'schedule', 'assign', 'other']),
  mode: PropTypes.oneOf(['startAndAdd', 'onlyAdd', 'edit']),
}

TaskEdit.defaultProps = {
  tag: 'div',
  task: {
    title: '',
    category: {
      title: '未分類',
      team: {
        id: 1,
        name: 'タイムクラウド株式会社',
      }
    }
  },
  teams: [],
  recentCategories: [],
  tab: 'unselect',
  mode: 'edit',
}

export default TaskEdit
