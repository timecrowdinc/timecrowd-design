import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Icon, ActionBar, TaskEdit } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'
import { WithDateHeaderWrap } from './Timeline.stories'

storiesOf('MyTask', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <ActionBar>
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>
                <Icon name="list" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Icon name="calendar" />
              </NavLink>
            </NavItem>
          </Nav>
        </ActionBar>
        <WithDateHeaderWrap />
      </DeviceSwitch>
    )
  })
