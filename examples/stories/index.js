import React from 'react'
import { storiesOf } from '@storybook/react'
import Example from './example'

import {ColorSelecter} from '../../src'

storiesOf('ColorSelecter', module)
  .add('Example', () => (
    <Example />
  ))

