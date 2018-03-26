import React from 'react'
import Button from 'or-button'

import './example.scss'

import {ColorSelecter} from '../../src'

const colorMap1 = {
  '#F3AA02': 'Cassia',
  '#DAA78D': 'Devon Sand',
  '#000': 'Black',
  '#DCD2C8': 'New Ivory',
  '#C2D3DD': 'Seltzer'
}

const colorMap2 = {
  '#a3433a': 'CHILI',
  '#c76b68': 'SEE SHEER',
  '#9c1234': 'RUBY WOO',
  '#b23532': 'LADY BUG',
  '#cd2834': 'LADY DANGER',
  '#972e2e': 'COCKNEY'
}

const colors1 = Object.keys(colorMap1)
const colors2 = Object.keys(colorMap2)

class Example extends React.Component {
  state = {
    color1: colors1[1],
    color2: colors2[0]
  }

  render () {
    return (
      <div className='example'>
        <div className='titile'><span className='text'>Color</span><span className='color'>{colorMap1[this.state.color1]}</span></div>
        <ColorSelecter
          size='small'
          selected={this.state.color1}
          colors={colors1}
          onChange={this.handleChange1} />
        <Button onClick={this.handleSubmit1}>ADD TO BAG</Button>
        <div className='titile'><span className='text'>Color</span><span className='color'>{colorMap2[this.state.color2]}</span></div>
        <ColorSelecter
          selected={this.state.color2}
          colors={colors2}
          onChange={this.handleChange2} />
        <Button onClick={this.handleSubmit2}>ADD TO BAG</Button>
      </div>
    )
  }

  handleChange1 = color => {
    this.setState({
      color1: color
    })
  }

  handleChange2 = color => {
    this.setState({
      color2: color
    })
  }

  handleSubmit1 = e => {
    const { color1 } = this.state
    const value = colorMap1[color1]
    console.log('send to api blabla: ', value)
  }

  handleSubmit2 = e => {
    const { color2 } = this.state
    const value = colorMap2[color2]
    console.log('send to api blabla: ', value)
  }
}

export default Example
