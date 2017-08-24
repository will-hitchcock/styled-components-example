/**
*
* Row
*
*/
import styled from 'styled-components'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-left: -.5rem;
  margin-right: -.5rem;
  ${props => props.reverse
    ? 'flex-direction: row-reverse;'
    : 'flex-direction: row;'
  }
`

export default Row
