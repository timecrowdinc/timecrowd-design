import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { LoadingSpinner } from '../timecrowd-components'
import DeviceSwitch from '../timecrowd-components/DeviceSwitch.jsx'

storiesOf('Loading', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <LoadingSpinner absoluteCenter />
      </DeviceSwitch>
    )
  })
