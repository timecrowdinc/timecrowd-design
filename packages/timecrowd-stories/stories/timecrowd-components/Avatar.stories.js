import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Avatar } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

const Sizing = () => (
  <div className="p-2">
    <Avatar image="http://lorempixel.com/144/144" size="textsize" />
    <Avatar image="http://lorempixel.com/120/120" size="sm" />
    <Avatar image="http://lorempixel.com/108/108" size="md" />
    <Avatar image="http://lorempixel.com/132/132" size="lg" />
  </div>
)

const Contextual = () => (
  <div>
    <div className="p-2">
      <Avatar image="http://lorempixel.com/180/180" />
      <Avatar image="http://lorempixel.com/144/144" color="primary" />
      <Avatar image="http://lorempixel.com/120/120" color="success" />
      <Avatar image="http://lorempixel.com/108/108" color="warning" />
      <Avatar image="http://lorempixel.com/132/132" color="danger" />
    </div>
    <div className="p-2">
      <Avatar image="http://lorempixel.com/156/156" active />
      <Avatar image="http://lorempixel.com/126/126" disabled />
    </div>
  </div>
)


storiesOf('Avatar', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <Contextual />
        <Sizing />
      </DeviceSwitch>
    )
  })
