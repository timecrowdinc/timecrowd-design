import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { ExpansionPanel, ExpansionPanelHeader, Icon, PanelBody, PanelFooter, CustomCheck, CustomRadio } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

class ExpansionPanelWrap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="p-2" style={{
        background: '#ddd',
      }}>
        <ExpansionPanel>
          <ExpansionPanelHeader>
            <label className="panel-label">
              <Icon name="message" />
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
        <ExpansionPanel>
          <ExpansionPanelHeader>
            <label className="panel-label">
              <Icon name="message" />
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

class CategorySelectorWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expand: false
    }

    this.selectCategory = this.selectCategory.bind(this)
  }

  selectCategory() {
  }

  render() {
    return (
      <div className="p-1" style={{background: "#eee"}}>
        <ExpansionPanel isExpand={this.state.expand}>
          <ExpansionPanelHeader>
            <label className="panel-label">
              <Icon name="tag" />
              Category
            </label>
            <div className="panel-preview">
              <i className="category-circle category-1" />
              Category Title
            </div>
          </ExpansionPanelHeader>
          <div className="panel-content">
            <PanelBody>
              <ListGroup>
                <ListGroupItem action>
                  <i className="category-circle category-2" />
                  Category Title
                </ListGroupItem>
                <ListGroupItem action>
                  <i className="category-circle category-3" />
                  Category Title
                </ListGroupItem>
                <ListGroupItem action>
                  <i className="category-circle category-4" />
                  Category Title
                </ListGroupItem>
              </ListGroup>
            </PanelBody>
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
  .add('CategorySelector', () => (
    <DeviceSwitch>
      <CategorySelectorWrap />
    </DeviceSwitch>
  ))
