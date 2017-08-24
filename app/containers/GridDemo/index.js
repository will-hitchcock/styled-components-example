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

const GridDemo = (props) =>
  <Container className={props.className}>
    <Row>
      <Col xs={12} sm={12} lg={12}>
        <Box>
          xs=12 sm=12 lg=12
        </Box>
      </Col>
    </Row>

    <Row>
      <Col xs={6} sm={6} lg={6}>
        <Box>
          xs=6 sm=6 lg=6
        </Box>
      </Col>
      <Col xs={6} sm={6} lg={6}>
        <Box>
          xs=6 sm=6 lg=6
        </Box>
      </Col>
    </Row>

    <Row>
      <Col xs={4} sm={4} lg={4}>
        <Box>
          xs=4 sm=4 lg=4
        </Box>
      </Col>
      <Col xs={4} sm={4} lg={4}>
        <Box>
          xs=4 sm=4 lg=4
        </Box>
      </Col>
      <Col xs={4} sm={4} lg={4}>
        <Box>
          xs=4 sm=4 lg=4
        </Box>
      </Col>
    </Row>

    <Row>
      <Col xs={3} sm={3} lg={3}>
        <Box>
          xs=3 sm=3 lg=3
        </Box>
      </Col>
      <Col xs={3} sm={3} lg={3}>
        <Box>
          xs=3 sm=3 lg=3
        </Box>
      </Col>
      <Col xs={3} sm={3} lg={3}>
        <Box>
          xs=3 sm=3 lg=3
        </Box>
      </Col>
      <Col xs={3} sm={3} lg={3}>
        <Box>
          xs=3 sm=3 lg=3
        </Box>
      </Col>
    </Row>

    <Row>
      <Col xs={2} sm={2} lg={2}>
        <Box>
          xs=2 sm=2 lg=2
        </Box>
      </Col>
      <Col xs={2} sm={2} lg={2}>
        <Box>
          xs=2 sm=2 lg=2
        </Box>
      </Col>
      <Col xs={2} sm={2} lg={2}>
        <Box>
          xs=2 sm=2 lg=2
        </Box>
      </Col>
      <Col xs={2} sm={2} lg={2}>
        <Box>
          xs=2 sm=2 lg=2
        </Box>
      </Col>
      <Col xs={2} sm={2} lg={2}>
        <Box>
          xs=2 sm=2 lg=2
        </Box>
      </Col>
      <Col xs={2} sm={2} lg={2}>
        <Box>
          xs=2 sm=2 lg=2
        </Box>
      </Col>
    </Row>

    <Row>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
      <Col xs={1} sm={1} lg={1}>
        <Box>
          xs=1 sm=1 lg=1
        </Box>
      </Col>
    </Row>
  </Container>

export default styled(GridDemo)`
  margin-top: 2rem;
`
