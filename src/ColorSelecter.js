import React from 'react'
import clx from 'classnames'

class ColorSelecter extends React.Component {
  render () {
    const { colors, selected, size } = this.props

    return (
      <div className='or-color-selecter-wrapper'>
        {
          colors.map((color) => {
            const small = size
            const classname = clx({
              'or-color-selecter': true,
              small,
              active: selected === color
            })
            return <div
              key={color}
              className={classname}
              onClick={this.handleClick(color)}>
              <div className='inner-color' style={{backgroundColor: color}} />
            </div>
          })
        }
      </div>
    )
  }

  handleClick = (color) => e => {
    e.preventDefault()
    const { onChange } = this.props
    onChange(color)
  }
}

export default ColorSelecter
