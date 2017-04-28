import React, { Component } from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { LoadingSpinner, DeviceSwitch } from 'timecrowd-components'
import { Button } from 'reactstrap'

storiesOf('Loading', module)
  .add('Overall', () => {
    return (
      <DeviceSwitch>
        <div className="d-flex">
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner position="absolute-center" />
          </div>
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="sm" position="absolute-center" />
          </div>
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="md" position="absolute-center" />
          </div>
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="lg" position="absolute-center" />
          </div>
        </div>
        <div className="d-flex">
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner position="absolute-center" color="lowkey" />
          </div>
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="sm" position="absolute-center" color="lowkey" />
          </div>
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="md" position="absolute-center" color="lowkey" />
          </div>
          <div className="position-relative" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="lg" position="absolute-center" color="lowkey" />
          </div>
        </div>
        <div className="d-flex">
          <div className="position-relative bg-inverse" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner position="absolute-center" color="inverse" />
          </div>
          <div className="position-relative bg-primary" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="sm" position="absolute-center" color="inverse" />
          </div>
          <div className="position-relative bg-warning" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="md" position="absolute-center" color="inverse" />
          </div>
          <div className="position-relative bg-danger" style={{width: "96px", height: "96px"}}>
            <LoadingSpinner size="lg" position="absolute-center" color="inverse" />
          </div>
        </div>
      </DeviceSwitch>
    )
  })
  .add('Button', () => {
    return (
      <DeviceSwitch>
        <Button color="primary" size="sm" active>
          <LoadingSpinner color="inverse" className="mr-1" />
          Small
        </Button>
        <Button color="primary" size="md" active>
          <LoadingSpinner color="inverse" className="mr-1" />
          Medium
        </Button>
        <Button color="primary" size="lg" active>
          <LoadingSpinner color="inverse" className="mr-1" />
          Medium
        </Button>
      </DeviceSwitch>
    )
  })
