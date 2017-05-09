import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Icon } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

const Sizing = () => (
  <div className="p-2">
    <Icon name="alarm" size="textsize" className="mr-2" />
    <Icon name="alarm" size="xs" className="mr-2" />
    <Icon name="alarm" size="sm" className="mr-2" />
    <Icon name="alarm" size="md" className="mr-2" />
    <Icon name="alarm" size="lg" className="mr-2" />
  </div>
)

const Contextual = () => (
  <div>
    <div className="p-2 d-flex">
      <Icon name="alarm" className="mr-2" />
      <Icon name="alarm" color="primary" className="mr-2" />
      <Icon name="alarm" color="success" className="mr-2" />
      <Icon name="alarm" color="warning" className="mr-2" />
      <Icon name="alarm" color="danger" className="mr-2" />
      <Icon name="alarm" color="link" className="mr-2" />
      <div className="position-relative bg-inverse pr-1 pl-1">
        <Icon name="alarm" inverse />
      </div>
    </div>
  </div>
)


storiesOf('Icon', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <Contextual />
        <Sizing />
      </DeviceSwitch>
    )
  })
