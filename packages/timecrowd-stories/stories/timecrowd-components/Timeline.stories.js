import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Button } from 'reactstrap'
import { Timeline } from 'timecrowd-components'
import DeviceSwitch from '../../assets/components/DeviceSwitch'

let fakeEntries = [
  {
    "id": 2547,
    "duration": 1800.0,
    "time_trackable_id": 1343,
    "started_at": 1463441283,
    "stopped_at": 1463443083,
    "user": {
      "id": 5803,
      "nickname": "Angelica Johnston PhD",
      "image": "https://lh5.googleusercontent.com/-vLvFHrocJuk/AAAAAAAAAAI/AAAAAAAAAEQ/CZsQXc7B2EM/photo.jpg?sz=50",
      "avatar_url": "https://lh5.googleusercontent.com/-vLvFHrocJuk/AAAAAAAAAAI/AAAAAAAAAEQ/CZsQXc7B2EM/photo.jpg?sz=50",
      "is_anonymous": true,
      "html_url": "http://test.host/users/5803"
    },
    "task": {
      "id": 1343,
      "key": "http://botsford.org/adelia.kihn",
      "title": "Exercitationem quae quam sed iste eum.",
      "url": "http://botsford.org/adelia.kihn",
      "safe_url": "http://botsford.org/adelia.kihn",
      "label": "[Miss Holden Wisozk] Exercitationem quae quam sed iste eum.",
      "team_id": 9294,
      "parent_id": null,
      "root_id": 1343,
      "category_path": "Exercitationem quae quam sed iste eum."
    },
    "formatted_duration": "00:30"
  },
  {
    "id": 2547,
    "duration": 2400.0,
    "time_trackable_id": 1343,
    "started_at": 1468954283,
    "stopped_at": 1469076083,
    "user": {
      "id": 5803,
      "nickname": "Angelica Johnston PhD",
      "image": "https://lh5.googleusercontent.com/-vLvFHrocJuk/AAAAAAAAAAI/AAAAAAAAAEQ/CZsQXc7B2EM/photo.jpg?sz=50",
      "avatar_url": "https://lh5.googleusercontent.com/-vLvFHrocJuk/AAAAAAAAAAI/AAAAAAAAAEQ/CZsQXc7B2EM/photo.jpg?sz=50",
      "is_anonymous": true,
      "html_url": "http://test.host/users/5803"
    },
    "task": {
      "id": 1343,
      "key": "http://botsford.org/adelia.kihn",
      "title": "Exercitationem quae quam sed iste eum.",
      "url": "http://botsford.org/adelia.kihn",
      "safe_url": "http://botsford.org/adelia.kihn",
      "label": "[Miss Holden Wisozk] Exercitationem quae quam sed iste eum.",
      "team_id": 9294,
      "parent_id": null,
      "root_id": 1343,
      "category_path": "Exercitationem quae quam sed iste eum."
    },
    "formatted_duration": "00:30"
  },
  {
    "id": 2547,
    "duration": 1200.0,
    "time_trackable_id": 1343,
    "started_at": 1472954283,
    "stopped_at": 1474076083,
    "user": {
      "id": 5803,
      "nickname": "Angelica Johnston PhD",
      "image": "https://lh5.googleusercontent.com/-vLvFHrocJuk/AAAAAAAAAAI/AAAAAAAAAEQ/CZsQXc7B2EM/photo.jpg?sz=50",
      "avatar_url": "https://lh5.googleusercontent.com/-vLvFHrocJuk/AAAAAAAAAAI/AAAAAAAAAEQ/CZsQXc7B2EM/photo.jpg?sz=50",
      "is_anonymous": true,
      "html_url": "http://test.host/users/5803"
    },
    "task": {
      "id": 1343,
      "key": "http://botsford.org/adelia.kihn",
      "title": "Exercitationem quae quam sed iste eum.",
      "url": "http://botsford.org/adelia.kihn",
      "safe_url": "http://botsford.org/adelia.kihn",
      "label": "[Miss Holden Wisozk] Exercitationem quae quam sed iste eum.",
      "team_id": 9294,
      "parent_id": null,
      "root_id": 1343,
      "category_path": "Exercitationem quae quam sed iste eum."
    },
    "formatted_duration": "00:30"
  },
]

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
      <Timeline subdivisions={4} divisionHeight={18} entries={this.state.entries} addEntry={this.addEntry} />
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
          testDivH: 12,
        })
        break
      case 12:
        this.setState({
          testSubdiv: 60,
          testDivH: 12,
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
  .add('Zoom (Experimental)', () => {
    return (
      <DeviceSwitch>
        <ZoomableWrap />
      </DeviceSwitch>
    )
  })
