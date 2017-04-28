import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Avatar } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

storiesOf('Avatar', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <Avatar image="http://lorempixel.com/120/120" />
        <Avatar image="http://lorempixel.com/108/108" />
        <Avatar image="http://lorempixel.com/132/132" />
      </DeviceSwitch>
    )
  })
