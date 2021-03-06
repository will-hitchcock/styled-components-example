/**
*
* ButtonLink
*
*/

import styled from 'styled-components'

export default styled.a`
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
  text-align: center;
  text-decoration: none;
  
  &:focus {
    outline: none;
  }
`
