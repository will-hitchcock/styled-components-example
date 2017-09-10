/*
 *
 * GridDemo
 *
 */

import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Col from 'components/Col'
import Row from 'components/Row'

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

const goldenLeft = ((1 + Math.sqrt(5)) / 2) - 1
const goldenRight = 1 - goldenLeft

const GridDemo = () =>
  <Container fluid>
    <Row>
      <Col xs={1}>
        <Box>xs=1</Box>
      </Col>
    </Row>

    <Col xs={goldenLeft}>
      xs=(1 + Math.sqrt(5)) / 2 - 1
    </Col>
    <Col xs={goldenRight}>
      xs=1 - ((1 + Math.sqrt(5)) / 2 - 1)
    </Col>
    {/* <Col xs={6}><Box>xs=6</Box></Col>
    <Col xs={6}><Box>xs=6</Box></Col>

    <Col xs={4}><Box>xs=4</Box></Col>
    <Col xs={4}><Box>xs=4</Box></Col>
    <Col xs={4}><Box>xs=4</Box></Col>

    <Col xs={3}><Box>xs=3</Box></Col>
    <Col xs={3}><Box>xs=3</Box></Col>
    <Col xs={3}><Box>xs=3</Box></Col>
    <Col xs={3}><Box>xs=3</Box></Col>

    <Col xs={2}><Box>xs=2</Box></Col>
    <Col xs={2}><Box>xs=2</Box></Col>
    <Col xs={2}><Box>xs=2</Box></Col>
    <Col xs={2}><Box>xs=2</Box></Col>
    <Col xs={2}><Box>xs=2</Box></Col>
    <Col xs={2}><Box>xs=2</Box></Col>

    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>
    <Col xs={1}><Box>xs=1</Box></Col>

    <Col xs={1 / 2}><Box>xs=1/2</Box></Col>
    <Col xs={1 / 2}><Box>xs=1/2</Box></Col>


    <Col xs={goldenLeft} rOffset={goldenRight}>
      <Box>rOffset=1 - ((1 + Math.sqrt(5)) / 2 - 1)</Box>
    </Col>
    <Col xs={goldenRight} lOffset={goldenLeft}>
      <Box>lOffset=(1 + Math.sqrt(5)) / 2 - 1</Box>
    </Col>

    <Col xs={4}><Box>xs=4</Box></Col>
    <Col xs={4} lOffset={4}><Box>lOffset={4}</Box></Col> */}
  </Container>

export default GridDemo
