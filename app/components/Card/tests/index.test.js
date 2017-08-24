import React from 'react'
import { shallow } from 'enzyme'

import Card from '../index'

describe('<Card />', () => {
  const component = shallow(<Card />)

  it('renders a <div />', () => {
    expect(component.find('div').node).toBeDefined()
  })
})
