import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * custom classname for color selecter
   */
  classname?: string

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
    const { colors, value, size = 'normal', classname } = this.props
    return (
      <div className="or-color-selecter-wrapper">
        {colors.map(color => {
          const classnames = clx(
            {
              [`or-color-selecter-${size}`]: size,
              'or-color-selecter-active': value === color
            },
            'or-color-selecter',
            classname
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
