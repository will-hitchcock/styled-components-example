/**
*
* Button
*
*/

import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'


const Button = props =>
  <button className={props.className} onClick={props.onClick}>
    {props.children}
  </button>

export default styled(Button)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  background: ${props => props.color || 'palevioletred'};

  &:focus {
    outline: none;
  }
`
