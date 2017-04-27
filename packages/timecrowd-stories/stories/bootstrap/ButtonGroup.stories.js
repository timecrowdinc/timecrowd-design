import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button, ButtonGroup } from 'reactstrap'
import DeviceSwitch from '../../timecrowd-components/DeviceSwitch.jsx'

storiesOf('ButtonGroup', module)
  .add('Sandard', () => (
    <DeviceSwitch>
      <div className="p-3">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </DeviceSwitch>
  ))
  .add('Nesting', () => (
    <DeviceSwitch>
      <div className="p-3">
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <ButtonGroup>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </DeviceSwitch>
  ))
