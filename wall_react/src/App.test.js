import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wall from './Wall'
import Brick from './Brick'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-addons-test-utils' // ES6
import { mount, render } from 'enzyme';

describe('rendering app without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div);
  })
})

describe('rendering wall', () => {
  const renderWall = ReactTestUtils.createRenderer();
  renderWall.render(<Wall />);
  const resultWall = renderWall.getRenderOutput();

  it('wall not null', () => {
    expect(resultWall).not.toBe(null);
  })

  it('type of wall', () => {
    expect(resultWall.type).toBe('div');
  })
})

describe('rendering brick', () => {
  const renderBrick = ReactTestUtils.createRenderer();
  renderBrick.render(<Brick />);
  const resultBrick = renderBrick.getRenderOutput();

  it('brick not null', () => {
    expect(resultBrick).not.toBe(null);
  })

  it('type of brick', () => {
    expect(resultBrick.type).toBe('div');
  })
})

describe('when clicking on the wall', () => {
  it('calls handleClick', () => {
    const wrapper = mount(<Wall />);
    const instance = wrapper.instance();

    spyOn(instance, 'handleClick')
    wrapper.update()

    wrapper.find('.Wall').simulate('click')

    expect(instance.handleClick).toHaveBeenCalled()
  });

  it('fix the brick', () => {
    const wrapper = mount(<Wall />);
    const brick = mount(<Brick />);

    const instance = wrapper.instance();

    spyOn(instance, 'state')
    wrapper.update()

    const wall = wrapper.find('.Wall')
    const event = {
      target: {
        id: 'wall'
      },
      pageX: 277+"px",
      pageY: 288+"px"
    }

    wall.props().onClick(event)

    expect(instance.state.isClicked).toEqual(1)
    expect(instance.state.fixX).toEqual("277px")
    expect(instance.state.fixY).toEqual("288px")
  });
})

describe('when clicking off the wall', () => {
  it('dont fix the brick', () => {
    const wrapper = mount(<Wall />);
    const instance = wrapper.instance();

    spyOn(instance, 'state')
    wrapper.update()

    const wall = wrapper.find('.Wall')
    const event = {
      target: {
        id: 'brick'
      }
    }

    wall.props().onClick(event)

    expect(instance.state.isClicked).toBe(null)
    expect(instance.state.fixX).toEqual("")
    expect(instance.state.fixY).toEqual("")
  });
})
