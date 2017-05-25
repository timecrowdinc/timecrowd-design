import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { TaskEdit, Icon } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

import { fakeTeams } from '../../fake/teams'
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
            <TaskEdit teams={fakeTeams} recentCategories={fakeRecentCategories} />
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

storiesOf('Task', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <QuickTaskWrap />
      </DeviceSwitch>
    )
  })
