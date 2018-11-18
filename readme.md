# One React Component: color-selecter

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/color-selecter.svg)](https://travis-ci.org/one-react/color-selecter)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/color-selecter.svg)](https://circleci.com/gh/one-react/color-selecter)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/color-selecter.svg)](https://codecov.io/gh/one-react/color-selecter) 
[![Version](https://img.shields.io/npm/v/or-color-selecter.svg)](https://www.npmjs.com/package/or-color-selecter)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/color-selecter.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-color-selecter

// with yarn
yarn add or-color-selecter
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
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

```

## API

```ts
interface Props {
  /**
   * custom className for color selecter
   */
  className?: string

  /**
   * size for color selecter
   * @default 'normal'
   **/
  size?: 'small'

  /**
   * selected value of color selecter
   **/
  value: string

  /**
   * selected value of color selecter
   **/
  colors: string[]

  /**
   * callback triggered button click
   **/
  onChange?: (color) => void
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-color-selecter can be overridden:

```scss
$or-color-selecter-default-border: $or-gray3 !default;
```

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/color-selecter)

## License

MIT &copy; foryuki
