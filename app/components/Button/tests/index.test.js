import React from 'react'
import { shallow } from 'enzyme'

import Button from '../index'

describe('<Button />', () => {
  const component = shallow(<Button />)

  it('renders a <button />', () => {
    expect(component.find('button').node).toBeDefined()
  })
})
