/*
 *
 * GridDemo
 *
 */

import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Row from 'components/Row'
import Col from 'components/Col'

const Box = styled.div`
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
  min-height: 1rem;
  background: palevioletred;
  border: 1px solid #FFF;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  color: #fff;
`

const GridDemo = () =>
  <Container>
    <Row>
      <Col xs={12} sm={6} lg={3}>
        <Box />
      </Col>
      <Col xs={12} sm={6} lg={3}>
        <Box />
      </Col>
      <Col xs={12} sm={6} lg={3}>
        <Box />
      </Col>
      <Col xs={12} sm={6} lg={3}>
        <Box />
      </Col>
    </Row>
  </Container>

export default GridDemo
