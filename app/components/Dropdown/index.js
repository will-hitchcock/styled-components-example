/**
*
* Dropdown
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'components/Button'
import { showing } from 'utils/style/mixins'

const StyledOptions = styled.ul`${showing}`

class Dropdown extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func
  }

  state = {
    open: false
  }

  handleSelect = (item) => {
    this.props.onSelect(item)
    this.setState({ open: false })
  }

  render() {
    return (
      <div className={this.props.className}>
        <Button onClick={() => { this.setState({ open: !this.state.open }) }}>{this.props.children}</Button>
        <StyledOptions showing={this.state.open}>
          {this.props.data.map((item) => {
            return (<li key={item} onClick={() => { this.handleSelect(item) }}>{item}</li>)
          })}
        </StyledOptions>
      </div>
    )
  }
}

export default styled(Dropdown)`
  display: inline-block;
  position: relative;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  ul {
    list-style: none;
    position: absolute;
    background-color: papayawhip;
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      padding: 0 1rem;
      &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
  }

  ${Button} {
    margin: 0;
  }
`
