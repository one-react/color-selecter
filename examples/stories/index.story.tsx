import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Example } from './example'

import './styles.scss'

storiesOf('or-color-selecter', module).add(
  'color-selecter',
  withInfo({ inline: true })(() => (
    <div>
      <Example />
    </div>
  ))
)
