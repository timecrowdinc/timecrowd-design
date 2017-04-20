import { configure, addDecorator } from '@kadira/storybook'
import React from 'react'

configure(
  () => {
    const req = require.context('../stories', true, /.stories.js$/)
    req.keys().forEach((filename) => req(filename))
  },
  module
)

configure(loadStories, module)
