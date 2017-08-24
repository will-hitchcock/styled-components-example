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
  margin-bottom: 1rem;
  position: relative;
  box-sizing: border-box;
  min-height: 1rem;
  margin-bottom: 0;
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
      <Col xs={6} md={3}>
        <Box />
      </Col>
      <Col xs={6} md={3}>
        <Box />
      </Col>
      <Col xs={6} md={3}>
        <Box />
      </Col>
      <Col xs={6} md={3}>
        <Box />
      </Col>
    </Row>
  </Container>

export default GridDemo
