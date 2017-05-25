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
    }

    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab(toggleTo) {
    if (this.state.tab !== toggleTo) {
      this.setState({
        tab: toggleTo
      })
    }
  }

  render() {
    const {
      className,
      children,
      tag,
      task,
      teams,
      recentCategories,
      tab,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'task-edit',
      className
    )

    return (
      <Tag {...attributes} className={classes}>
        <div className="task-edit-preview">
          <textarea className="form-control task-edit-title" placeholder="タスクのタイトルを入力" rows={1} />
        </div>
        <Nav tabs className="task-edit-tabs">
          <NavLink
            className={this.state.tab === 'category' ? 'active' : ''}
            onClick={() => { this.toggleTab('category'); }}
          >
            <Icon name="tags" />
          </NavLink>
          <NavLink
            className={this.state.tab === 'schedule' ? 'active' : ''}
            onClick={() => { this.toggleTab('schedule'); }}
          >
            <Icon name="clock" />
          </NavLink>
          <NavLink
            className={this.state.tab === 'assign' ? 'active' : ''}
            onClick={() => { this.toggleTab('assign'); }}
          >
            <Icon name="user" />
          </NavLink>
          <NavLink
            className={this.state.tab === 'other' ? 'active' : ''}
            onClick={() => { this.toggleTab('other'); }}
          >
            <Icon name="dots-3" />
          </NavLink>
          <div className="task-edit-controls">
            <Button color="link">
              <Icon name="plus" />
              <span className="ml-1">追加</span>
            </Button>
            <Button color="primary">
              <Icon name="start" />
              <span className="hidden-sm-down ml-1">開始</span>
            </Button>
          </div>
        </Nav>
        <TabContent activeTab={this.state.tab}>
          <TabPane tabId="category">
            <CategorySelector teams={teams} recentCategories={recentCategories} />
          </TabPane>
          <TabPane tabId="schedule">
            <div className="p-3" style={{background: '#fff'}}>時間編集！</div>
          </TabPane>
          <TabPane tabId="assign">
            {teams.map((team) => {
              return (
                <ExpansionPanel>
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
                            <ListGroupItemCheck>
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
  task: PropTypes.object,
  teams: PropTypes.array,
  recentCategories: PropTypes.array,
  tab: PropTypes.oneOf(['category', 'schedule', 'assign', 'other']),
}

TaskEdit.defaultProps = {
  tag: 'div',
  task: {
    title: ''
  },
  teams: [],
  recentCategories: [],
  tab: 'category',
}

export default TaskEdit
