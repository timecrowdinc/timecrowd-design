import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button } from 'reactstrap'
import DeviceSwitch from '../../assets/components/DeviceSwitch.jsx'

storiesOf('Button', module)
  .add('Contextual', () => (
    <DeviceSwitch>
      <div className="mb-3">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="warning">warning</Button>
        <Button color="danger">danger</Button>
        <Button color="link">link</Button>
      </div>
      <div>
        <Button color="primary" active>active</Button>
        <Button color="secondary" active>active</Button>
        <Button color="primary" disabled>disable</Button>
        <Button color="secondary" disabled>disable</Button>
      </div>
    </DeviceSwitch>
  ))
  .add('Sizing', () => (
    <DeviceSwitch>
      <div>
        <Button color="primary" size="lg">large</Button>
        <Button color="secondary" size="lg">large</Button>
        <Button color="primary" size="md">medium</Button>
        <Button color="secondary" size="md">medium</Button>
        <Button color="primary" size="sm">small</Button>
        <Button color="secondary" size="sm">small</Button>
      </div>
    </DeviceSwitch>
  ))
