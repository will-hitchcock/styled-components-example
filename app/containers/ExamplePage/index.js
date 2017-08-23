/*
 *
 * ExamplePage
 *
 */

import React, { Component } from 'react'
import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import Block from 'components/Block'
import styled from 'styled-components'

const BigButton = styled(Button)`
  font-size: 2rem;
  padding: 1rem 2rem;
`

export class ExamplePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Block slim>
        <Button>Button</Button>
        <Button color="red" onClick={() => { console.log('Hello!') }}>Red Button</Button>
        <Dropdown
          data={['United States', 'Canada', 'Mexico']}
          onSelect={(data) => {
            console.log(`${data} selected!`)
          }}
        >
          Dropdown
        </Dropdown>

        <BigButton>Bigger</BigButton>
        <BigButton color="red">Redder</BigButton>
      </Block>
    )
  }
}

export default ExamplePage
