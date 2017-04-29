import * as storybook from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'

setOptions({
  name: 'Tiny View',
  url: 'https://github.com/ruffnote/timecrowd-design',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
})

storybook.configure(
  () => {
    const req = require.context('../stories', true, /.stories.js$/)
    req.keys().forEach((filename) => req(filename))
  },
  module
)

//storybook.configure(loadStories, module)
