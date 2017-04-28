import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class DeviceSwitch extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: this.props.device || 'pc'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    const {
      className,
      children,
      tag,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = ['device-switch', className].join(' ')

    return (
      <Tag {...attributes} className={classes}>
        <Nav pills className="device-selector">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'pc' })}
              onClick={() => { this.toggle('pc'); }}
            >
              PC
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'crx' })}
              onClick={() => { this.toggle('crx'); }}
            >
              CRX
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'touch' })}
              onClick={() => { this.toggle('touch'); }}
            >
              Touch
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="pc">
            <div style={{
              background: "#fff",
              minHeight: "100vh",
              minWidth: "100%",
            }}>
              {children}
            </div>
          </TabPane>
          <TabPane tabId="crx" className="crx">
            <div style={{
              background: "#fff",
              height: "620px",
              width: "420px",
            }}>
              {children}
            </div>
          </TabPane>
          <TabPane tabId="touch" className="touch-device">
            <div style={{
              background: "#fff",
              height: "500px",
              width: "320px",
            }}>
              {children}
            </div>
          </TabPane>
        </TabContent>
      </Tag>
    )
  }
}

DeviceSwitch.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

DeviceSwitch.defaultProps = {
  tag: 'div',
}

export default DeviceSwitch
