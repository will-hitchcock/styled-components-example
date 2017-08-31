import React from 'react'
import { shallow } from 'enzyme'

import Container from '../index'

describe('<Container />', () => {
  const component = shallow(<Container />)

  it('renders a <div />', () => {
    expect(component.find('div').node).toBeDefined()
  })
})
