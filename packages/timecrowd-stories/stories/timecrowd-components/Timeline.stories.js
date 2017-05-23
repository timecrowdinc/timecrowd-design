import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button } from 'reactstrap'
import { Timeline, DateHeader } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'
import { fakeEntries } from '../../fake/entries'

class StdWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: fakeEntries
    }

    this.addEntry = this.addEntry.bind(this)
  }

  addEntry(entry) {
    this.setState({
      entries: this.state.entries.concat([entry])
    })
  }

  render() {
    return (
      <Timeline entries={this.state.entries} addEntry={this.addEntry} />
    )
  }
}

class FiveMinWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: fakeEntries
    }

    this.addEntry = this.addEntry.bind(this)
  }

  addEntry(entry) {
    this.setState({
      entries: this.state.entries.concat([entry])
    })
  }

  render() {
    return (
      <Timeline subdivisions={12} divisionHeight={12} entries={this.state.entries} addEntry={this.addEntry} />
    )
  }
}

class FifteenMinWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: fakeEntries
    }

    this.addEntry = this.addEntry.bind(this)
  }

  addEntry(entry) {
    this.setState({
      entries: this.state.entries.concat([entry])
    })
  }

  render() {
    return (
      <Timeline subdivisions={4} divisionHeight={24} entries={this.state.entries} addEntry={this.addEntry} />
    )
  }
}

class ZoomableWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: fakeEntries,
      testSubdiv: 2,
      testDivH: 24,
    }

    this.addEntry = this.addEntry.bind(this)
    this.zoomTest = this.zoomTest.bind(this)
  }

  addEntry(entry) {
    this.setState({
      entries: this.state.entries.concat([entry])
    })
  }

  zoomTest() {
    switch (this.state.testSubdiv) {
      case 2:
        this.setState({
          testSubdiv: 4,
          testDivH: 18,
        })
        break
      case 4:
        this.setState({
          testSubdiv: 6,
          testDivH: 18,
        })
        break
      case 6:
        this.setState({
          testSubdiv: 12,
          testDivH: 18,
        })
        break
      case 12:
        this.setState({
          testSubdiv: 60,
          testDivH: 18,
        })
        break
      case 60:
        this.setState({
          testSubdiv: 2,
          testDivH: 24
        })
        break
    }
  }

  render() {
    return (
      <div>
        <Timeline entries={this.state.entries} subdivisions={this.state.testSubdiv} divisionHeight={this.state.testDivH} addEntry={this.addEntry} />
        <button onClick={this.zoomTest} style={
          {
            position: 'fixed',
            top: '36px',
            right: '36px',
            backgroundColor: '#000',
            color: '#fff',
          }
        }>Zoom (Every { 60 / this.state.testSubdiv} min)</button>
      </div>
    )
  }
}

storiesOf('Timeline', module)
  .add('No Options (Every 30min)', () => {
    return (
      <DeviceSwitch>
        <StdWrap />
      </DeviceSwitch>
    )
  })
  .add('Every 15 min', () => {
    return (
      <DeviceSwitch>
        <FifteenMinWrap />
      </DeviceSwitch>
    )
  })
  .add('Every 5 min', () => {
    return (
      <DeviceSwitch>
        <FiveMinWrap />
      </DeviceSwitch>
    )
  })
  .add('with Date Container', () => {
    return (
      <DeviceSwitch>
        <div className="date">
          <DateHeader date={'今日'} total={'0時間42分'} />
          <FifteenMinWrap />
        </div>
        <div className="date">
          <DateHeader date={'昨日'} total={'7時間51分'} />
          <FifteenMinWrap />
        </div>
      </DeviceSwitch>
    )
  })
  .add('Zoom (Experimental)', () => {
    return (
      <DeviceSwitch>
        <ZoomableWrap />
      </DeviceSwitch>
    )
  })
