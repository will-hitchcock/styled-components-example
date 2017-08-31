import React from 'react'
import { shallow } from 'enzyme'

import Block from '../index'

describe('<Block />', () => {
  const component = shallow(
    <Block
      theme={{ colors: { white: 'white', neutral1: 'eggshell' } }}
    />
  )

  it('renders a <div />', () => {
    expect(component.find('div').node).toBeDefined()
  })
})
