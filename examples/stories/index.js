import React from 'react'
import { storiesOf } from '@storybook/react'
import Example from './example'

import './example.scss'

import {ColorSelecter} from '../../src'

storiesOf('ColorSelecter', module)
  .add('Example', () => (
    <Example />
  ))

