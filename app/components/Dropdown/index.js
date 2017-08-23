/**
*
* Dropdown
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button, { StyledButton } from 'components/Button'
import styled from 'styled-components'

const StyledOptions = styled.ul`
  display: ${props => props.showing ? 'block' : 'none' };
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
`

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
        <Button onClick={() => {this.setState({ open: !this.state.open })}}>{this.props.children}</Button>
        <StyledOptions showing={this.state.open}>
          {this.props.data.map((item) => {
            return (<li key={item} onClick={() => {this.handleSelect(item)}}>{item}</li>)
          })}
        </StyledOptions>
      </div>
    )
  }
}

const StyledDropdown = styled(Dropdown)`
  display: inline-block;
  position: relative;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;

  ${Button} {
    margin: 0;
  }
`

export default StyledDropdown
