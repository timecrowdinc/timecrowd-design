import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { LoadingSpinner } from '../timecrowd-components'
import { Button } from 'reactstrap'
import DeviceSwitch from '../timecrowd-components/DeviceSwitch.jsx'

storiesOf('Loading', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <LoadingSpinner />
        <LoadingSpinner size="sm" />
        <LoadingSpinner size="md" />
        <LoadingSpinner size="lg" />
      </DeviceSwitch>
    )
  })
  .add('Button', () => {
    return (
      <DeviceSwitch>
        <Button color="primary" size="sm" active>
          <LoadingSpinner color="white" />
          Medium
        </Button>
        <Button color="primary" size="md" active>
          <LoadingSpinner color="white" />
          Medium
        </Button>
        <Button color="primary" size="lg" active>
          <LoadingSpinner color="white" />
          Medium
        </Button>
      </DeviceSwitch>
    )
  })
