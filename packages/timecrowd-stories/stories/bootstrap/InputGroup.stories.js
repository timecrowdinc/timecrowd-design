import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap'

storiesOf('InputGroup', module)
  .add('Buttons/Dropdowns', () => (
    <div className="p-3">
      <InputGroup>
        <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton></InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton></InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
      </InputGroup>
    </div>
  ))
