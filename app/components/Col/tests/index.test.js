import React from 'react'
import { shallow } from 'enzyme'

import Col from '../index'

describe('<Col />', () => {
  const component = shallow(<Col />)

  it('renders a <div />', () => {
    expect(component.find('div').node).toBeDefined()
  })
})
