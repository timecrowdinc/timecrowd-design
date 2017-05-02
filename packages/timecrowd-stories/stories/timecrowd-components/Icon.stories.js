import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Icon } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

const Sizing = () => (
  <div className="p-2">
    <Icon name="alarm" size="textsize" />
    <Icon name="alarm" size="sm" />
    <Icon name="alarm" size="md" />
    <Icon name="alarm" size="lg" />
  </div>
)

const Contextual = () => (
  <div>
    <div className="p-2 d-flex">
      <Icon name="alarm" />
      <Icon name="alarm" color="primary" />
      <Icon name="alarm" color="success" />
      <Icon name="alarm" color="warning" />
      <Icon name="alarm" color="danger" />
      <div className="position-relative bg-inverse" style={{width: "36px", height: "36px"}}>
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
