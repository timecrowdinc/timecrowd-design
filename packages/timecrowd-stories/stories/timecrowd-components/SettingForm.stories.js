import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Col, Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap'
import { CustomCheck, CustomRadio } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

class CheckboxWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked1: false,
      checked2: true,
    }
  }

  render() {
    return (
      <div className="p-2">
        <div className="custom-controls-stacked">
          <CustomCheck checked={this.state.checked1} onClick={(e) => {
            this.setState({checked1: !this.state.checked1})
          }}>
            Custom Checkbox
          </CustomCheck>
          <CustomCheck checked={this.state.checked2} onClick={(e) => {
            this.setState({checked2: !this.state.checked2})
          }}>
            Custom Checkbox (default checked)
          </CustomCheck>
          <CustomCheck indeterminate onClick={(e) => {}}>
            Custom Checkbox (indeterminate)
          </CustomCheck>
          <CustomCheck checked={true} disabled>
            Disabled Checkbox
          </CustomCheck>
        </div>
      </div>
    )
  }
}

class RadioWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: 0,
    }
  }

  render() {
    return (
      <div className="p-2">
        <div className="custom-controls-stacked">
          <CustomRadio checked={(this.state.checked === 0) ? true : false} onClick={(e) => {
            this.setState({checked: 0})
          }}>
            Custom Radio 1
          </CustomRadio>
          <CustomRadio checked={(this.state.checked === 1) ? true : false} onClick={(e) => {
            this.setState({checked: 1})
          }}>
            Custom Radio 2
          </CustomRadio>
          <CustomRadio checked={(this.state.checked === 2) ? true : false} onClick={(e) => {
            this.setState({checked: 2})
          }} disabled>
            Disabled Radio
          </CustomRadio>
        </div>
      </div>
    )
  }
}


storiesOf('SettingForm', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <CheckboxWrap />
        <RadioWrap />
      </DeviceSwitch>
    )
  })
  .add('Custom Checkbox', () => {
    return (
      <CheckboxWrap />
    )
  })
  .add('Custom Radio', () => {
    return (
      <RadioWrap />
    )
  })
