import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button } from 'reactstrap'
import { CustomCheck, DeviceSwitch } from 'timecrowd-components'

storiesOf('Template', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
      </DeviceSwitch>
    )
  })
