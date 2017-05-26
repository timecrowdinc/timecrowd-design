import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { TaskEdit, Icon } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

import { fakeTeams } from '../../fake/teams'
import { fakeEntries } from '../../fake/entries'
import { fakeRecentCategories } from '../../fake/recentCategories'

class QuickTaskWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div style={{border: '1px solid #d8d8d8'}}>
        <div className="quick-task">
          {!this.state.open && (
            <div className="task-edit">
              <div className="task-edit-preview">
                <textarea className="form-control task-edit-title" placeholder="新しいタスク" rows={1} onClick={() => {
                  this.setState({
                    open: true
                  })
                }} />
              </div>
            </div>
          )}
          {this.state.open && (
            <TaskEdit mode="startAndAdd" tab="category" teams={fakeTeams} recentCategories={fakeRecentCategories} />
          )}
        </div>
        <div style={{height: '100vh'}} onClick={() => {
          this.setState({
            open: false
          })
        }}></div>
      </div>
    )
  }
}

class TaskListWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      task: fakeEntries[0].task
    }
  }

  render() {
    return (
      <div>
        <div className="tasklist">
          {!this.state.open && (
            <div className="task">
              <div className="task-block">
                <span className="task-title">{this.state.task.title}</span>
                <div className="task-meta">
                  <span className="task-category">
                    <i className="category-circle category-1" />
                    カテゴリー名 - チーム名
                  </span>
                  <span className="task-times">
                    <Icon name="clock" className="mr-1" />
                    02:00:00
                  </span>
                </div>
              </div>
              <div className="task-controls">
                <button className="btn btn-secondary btn-sm" onClick={() => {
                  this.setState({
                    open: true
                  })
                }}>
                  <Icon name="pencil" />
                </button>
              </div>
            </div>
          )}
          {this.state.open && (
            <TaskEdit task={this.state.task} teams={fakeTeams} recentCategories={fakeRecentCategories} />
          )}
        </div>
      </div>
    )
  }
}

storiesOf('TaskEdit', module)
  .add('QuickTask', () => {
    return (
      <DeviceSwitch>
        <QuickTaskWrap />
      </DeviceSwitch>
    )
  })
  .add('TaskList', () => {
    return (
      <DeviceSwitch>
        <TaskListWrap />
      </DeviceSwitch>
    )
  })
