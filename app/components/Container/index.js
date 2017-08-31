/**
*
* Container
*
*/

import styled, { css } from 'styled-components'
import { media } from 'utils/style/mixins'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  ${props => props.reverse
    ? 'flex-direction: row-reverse;'
    : 'flex-direction: row;'
  }
  ${props => props.fluid
    ?
      css`padding-right: 0;
      padding-left: 0;`
    : null
  }

  ${media('sm')`
    width: 49rem;
  `}

  ${media('md')`
    width: 65rem;
  `}

  ${media('lg')`
    width: 76rem;
  `}
`

export default Container
