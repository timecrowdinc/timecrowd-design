import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Alert, Button } from 'reactstrap'

storiesOf('Alert', module)
  .add('Alerts', () => (
    <div>
      <Alert color="success">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert color="info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </Alert>
      <Alert color="warning">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </Alert>
      <Alert color="danger">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
      <Button color="primary" disabled>Primary button</Button>{' '}
      <Button color="secondary" disabled>Button</Button>
    </div>
  ))
