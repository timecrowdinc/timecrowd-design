import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button, ButtonGroup } from 'reactstrap'

storiesOf('ButtonGroup', module)
  .add('Sandard', () => (
    <div className="p-3">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
  ))
  .add('Nesting', () => (
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
  ))
