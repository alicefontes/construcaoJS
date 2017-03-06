import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wall from './Wall'
import Brick from './Brick'
import MoveBrick from './MoveBrick'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-addons-test-utils' // ES6
import { shallow, mount, render } from 'enzyme';

const renderMe = ReactTestUtils.createRenderer();
renderMe.render(<Wall />);
const resultWall = renderMe.getRenderOutput();

const renderB = ReactTestUtils.createRenderer();
renderB.render(<Brick />);
const resultBrick = renderB.getRenderOutput();

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div);
})

test('wall not null', () => {
  expect(resultWall).not.toBe(null);
})

it('type of wall', () => {
  expect(resultWall.type).toBe('div');
})

test('brick not null', () => {
  expect(resultBrick).not.toBe(null);
})

it('type of brick', () => {
  expect(resultBrick.type).toBe('div');
})

it('', () => {
  const wrapper = shallow(<Wall />);
  expect(wrapper.find(Wall))
});


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
      },
    }

    wall.props().onClick(event)

    expect(instance.state.isClicked).toBe(null)
    expect(instance.state.fixX).toEqual("")
    expect(instance.state.fixY).toEqual("")
  });
})
