import Button from 'or-button'
import React, { PureComponent } from 'react'

import ColorSelecter from 'or-color-selecter'

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

export default class Example extends PureComponent {
  state = {
    color1: colors1[1],
    color2: colors2[0]
  }

  render() {
    return (
      <div className="example">
        <h1>Small size:</h1>
        <div className="titile">
          <span className="text">Color</span>
          <span className="color-text">{colorMap1[this.state.color1]}</span>
        </div>
        <ColorSelecter
          size="small"
          value={this.state.color1}
          colors={colors1}
          onChange={this.handleChange('color1')}
        />
        <Button onClick={this.handleSubmit(1)}>ADD TO BAG</Button>
        <h1>Normal size:</h1>
        <div className="titile">
          <span className="text">Color</span>
          <span className="color-text">{colorMap2[this.state.color2]}</span>
        </div>
        <ColorSelecter
          className="hello"
          value={this.state.color2}
          colors={colors2}
          onChange={this.handleChange('color2')}
        />
        <Button onClick={this.handleSubmit(2)}>ADD TO BAG</Button>
      </div>
    )
  }

  handleChange = stateKey => {
    return color => {
      this.setState({
        [`${stateKey}`]: color
      })
    }
  }

  handleSubmit = colorKey => {
    return () => {
      colorKey === 1
        ? alert('Add:\t' + colorMap1[this.state.color1])
        : alert('Add:\t' + colorMap2[this.state.color2])
    }
  }
}
