import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import ColorSelecter from 'or-color-selecter'
import { previewCode } from './util'

import Example from './example'

import './styles.scss'

storiesOf('or-color-selecter', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [ColorSelecter],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('sample', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
