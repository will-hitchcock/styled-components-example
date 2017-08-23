/**
*
* Card
*
*/

import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'


const Card = props =>
  <div className={props.className}>
    {props.children}
  </div>

export default styled(Card)`
  width: 50%;
  margin: 0 auto;
  background-color: #fff;
  transition: box-shadow .25s;
  border-radius: 2px;
  box-shadow: 3px 3px 3px 3px #ccc;
`
