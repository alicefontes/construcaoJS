import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wall from './Wall'
import Brick from './Brick'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

describe('Wall', () => {
  describe('#render', () => {
    describe('rendering wall', () => {
      let resultWall

      beforeEach(() => {
        resultWall = shallow(<Wall />)
      })

      it('wall not null', () => {
        expect(resultWall).not.toBe(null)
      })

      it('type of wall', () => {
        expect(resultWall.type()).toBe('div')
      })
    })

    describe('rendering brick', () => {
      let resultBrick

      beforeEach(() => {
        resultBrick = shallow(<Brick />)
      })

      it('brick not null', () => {
        expect(resultBrick).not.toBe(null)
      })

      it('type of brick', () => {
        expect(resultBrick.type()).toBe('div')
      })
    })
  })

  describe('#handleClick', () => {
    describe('when clicking on the wall', () => {
      it('calls handleClick', () => {
        const wrapper = mount(<Wall />)
        const instance = wrapper.instance()

        spyOn(instance, 'handleClick')
        wrapper.update()

        wrapper.find('.Wall').simulate('click')

        expect(instance.handleClick).toHaveBeenCalled()
      })

      it('fix the brick', () => {
        const wrapper = mount(<Wall />)
        const brick = mount(<Brick />)

        const instance = wrapper.instance()

        spyOn(instance, 'state')
        wrapper.update()

        const wall = wrapper.find('.Wall')
        const event = {
          target: {
            id: 'wall'
          },
          pageX: `${277}px`,
          pageY: `${288}px`
        }

        wall.props().onClick(event)

        expect(instance.state.timesClicked).toEqual(1)
        expect(instance.state.fixX).toEqual("277px")
        expect(instance.state.fixY).toEqual("288px")
      })
    })

    describe('when clicking off the wall', () => {
      it('dont fix the brick', () => {
        const wrapper = mount(<Wall />)
        const instance = wrapper.instance()

        spyOn(instance, 'state')
        wrapper.update()

        const wall = wrapper.find('.Wall')
        const event = {
          target: {
            id: 'brick'
          }
        }

        wall.props().onClick(event)

        expect(instance.state.timesClicked).toBe(null)
        expect(instance.state.fixX).toEqual("")
        expect(instance.state.fixY).toEqual("")
      })
    })
  })
})
