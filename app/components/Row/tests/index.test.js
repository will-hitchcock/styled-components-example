import React from 'react'
import { shallow } from 'enzyme'

import Row from '../index'

describe('<Row />', () => {
  const component = shallow(<Row />)

  it('renders a <div />', () => {
    expect(component.find('div').node).toBeDefined()
  })
})
