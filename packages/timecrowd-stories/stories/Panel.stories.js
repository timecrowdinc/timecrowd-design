import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button } from 'reactstrap'
import { ExpansionPanel, ExpansionPanelHeader, PanelBody, PanelFooter, CustomCheck, CustomRadio } from '../timecrowd-components'
import DeviceSwitch from '../timecrowd-components/DeviceSwitch.jsx'

class ExpansionPanelWrap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="p-2" style={{
        background: '#eee',
      }}>
        <ExpansionPanel>
          <ExpansionPanelHeader>
            <label className="panel-title">
              <i className="dripicons-message panel-title-icon" />
              Label
            </label>
            <div className="panel-preview">
              Content Preview
            </div>
          </ExpansionPanelHeader>
          <div className="panel-content">
            <PanelBody>
              <div className="p-2">
                <CustomCheck checked={false}>
                  Checkbox 1
                </CustomCheck>
                <CustomCheck checked={true}>
                  Checkbox 2 (default checked)
                </CustomCheck>
                <CustomCheck checked={false}>
                  Disabled Checkbox
                </CustomCheck>
              </div>
            </PanelBody>
            <PanelFooter>
              <Button size="sm" color="link">SubControl</Button>
              <div className="d-flex-right">
                <Button size="sm">
                  Secondary
                </Button>
                <Button size="sm" color="primary">
                  Primary
                </Button>
              </div>
            </PanelFooter>
          </div>
        </ExpansionPanel>
      </div>
    )
  }
}

storiesOf('Panel', module)
  .add('ExpansionPanel', () => (
    <DeviceSwitch>
      <ExpansionPanelWrap />
    </DeviceSwitch>
  ))
