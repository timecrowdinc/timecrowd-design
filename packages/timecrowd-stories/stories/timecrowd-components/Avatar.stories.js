import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Avatar } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

const Sizing = () => (
  <div className="p-2 d-flex">
    <Avatar image="http://lorempixel.com/144/144" size="textsize" className="mr-2" />
    <Avatar image="http://lorempixel.com/120/120" size="sm" className="mr-2" />
    <Avatar image="http://lorempixel.com/108/108" size="md" className="mr-2" />
    <Avatar image="http://lorempixel.com/132/132" size="lg" className="mr-2" />
  </div>
)

const Contextual = () => (
  <div>
    <div className="p-2">
      <Avatar image="http://lorempixel.com/180/180" className="mr-2" />
      <Avatar image="http://lorempixel.com/144/144" color="primary" className="mr-2" />
      <Avatar image="http://lorempixel.com/120/120" color="success" className="mr-2" />
      <Avatar image="http://lorempixel.com/108/108" color="warning" className="mr-2" />
      <Avatar image="http://lorempixel.com/132/132" color="danger" className="mr-2" />
    </div>
    <div className="p-2">
      <Avatar image="http://lorempixel.com/156/156" active className="mr-2" />
      <Avatar image="http://lorempixel.com/126/126" disabled className="mr-2" />
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
