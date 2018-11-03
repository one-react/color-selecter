import { mount } from 'enzyme'
import React, { PureComponent } from 'react'

import ColorSelecter from '../src'

const colorMap = {
  '#F3AA02': 'Cassia',
  '#DAA78D': 'Devon Sand',
  '#000': 'Black',
  '#DCD2C8': 'New Ivory'
}

const colors = Object.keys(colorMap)

const mockCallBack = jest.fn()
describe('src/index', () => {
  describe('ColorSelecter: custom classname', () => {
    const wrapper = mount(
      renderColorSelecter({
        classname: 'hello'
      })
    )
    it('should render properly', () => {
      expect(wrapper.find('.or-color-selecter-wrapper').length).toBe(1)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(0)
          .hasClass('hello')
      ).toBe(true)
    })
  })

  describe('ColorSelecter: size# normal', () => {
    const wrapper = mount(renderColorSelecter({}))
    it('should render properly', () => {
      expect(wrapper.find('.or-color-selecter-wrapper').length).toBe(1)
      expect(wrapper.find('.or-color-selecter-normal').length).toBe(4)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(0)
          .hasClass('or-color-selecter-active')
      ).toBe(true)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(1)
          .hasClass('or-color-selecter-active')
      ).toBe(false)
    })
  })

  describe('ColorSelecter: size# small', () => {
    const wrapper = mount(
      renderColorSelecter({
        size: 'small'
      })
    )
    it('should render properly', () => {
      expect(wrapper.find('.or-color-selecter-wrapper').length).toBe(1)
      expect(wrapper.find('.or-color-selecter-small').length).toBe(4)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(0)
          .hasClass('or-color-selecter-active')
      ).toBe(true)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(1)
          .hasClass('or-color-selecter-active')
      ).toBe(false)
    })
  })

  describe('simulates click events', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderColorSelecter />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('click events', () => {
      expect(wrapper.find('.or-color-selecter-wrapper').length).toBe(1)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(0)
          .hasClass('or-color-selecter-active')
      ).toBe(true)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(1)
          .hasClass('or-color-selecter-active')
      ).toBe(false)
      wrapper
        .find('.or-color-selecter')
        .at(1)
        .simulate('click')
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(0)
          .hasClass('or-color-selecter-active')
      ).toBe(false)
      expect(
        wrapper
          .find('.or-color-selecter')
          .at(1)
          .hasClass('or-color-selecter-active')
      ).toBe(true)
    })
  })
})

function renderColorSelecter(props) {
  return <ColorSelecter colors={colors} value={colors[0]} {...props} />
}

class RenderColorSelecter extends PureComponent {
  state = {
    value: colors[0]
  }

  render() {
    return (
      <ColorSelecter
        size="small"
        value={this.state.value}
        colors={colors}
        onChange={this.handleChange}
      />
    )
  }

  handleChange = color => {
    this.setState({
      value: color
    })
  }
}
