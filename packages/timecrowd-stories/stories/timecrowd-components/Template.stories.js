import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button } from 'reactstrap'
import { CustomCheck } from '../../timecrowd-components'
import DeviceSwitch from '../../timecrowd-components/DeviceSwitch.jsx'

storiesOf('Template', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
      </DeviceSwitch>
    )
  })
