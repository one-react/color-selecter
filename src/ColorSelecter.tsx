import clx from 'classnames'
import React, { PureComponent } from 'react'

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

export class ColorSelecter extends PureComponent<Props, {}> {
  render() {
    const { colors, value, size = 'normal', className } = this.props
    return (
      <div className="or-color-selecter-wrapper">
        {colors.map(color => {
          const classnames = clx(
            {
              [`or-color-selecter-${size}`]: size,
              'or-color-selecter-active': value === color
            },
            'or-color-selecter',
            className
          )
          return (
            <div
              key={color}
              className={classnames}
              onClick={this.handleClick(color)}
            >
              <div
                className="or-inner-color"
                style={{ backgroundColor: color }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  handleClick = color => () => {
    const { onChange } = this.props
    onChange(color)
  }
}
