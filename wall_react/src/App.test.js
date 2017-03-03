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

it('should render three <Foo /> components', () => {
  const wrapper = shallow(<Wall />);
  expect(wrapper.find(Wall))
});


describe('<Wall />', () => {
  it('simulates click events', () => {
    const wrapper = mount(<Wall />);
    const instance = wrapper.instance();

    spyOn(instance, 'handleClick')
    wrapper.update()

    wrapper.find('.Wall').simulate('click')

    expect(instance.handleClick).toHaveBeenCalled()
  });
})