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
      <div className="quick-task">
        {!this.state.open && (
          <button type="button" className="btn btn-secondary btn-block" onClick={() => {
            this.setState({
              open: true
            })
          }} >
            <Icon name="plus" />
            新しいタスク
          </button>
        )}
        {this.state.open && (
          <TaskEdit teams={fakeTeams} recentCategories={fakeRecentCategories} />
        )}
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
