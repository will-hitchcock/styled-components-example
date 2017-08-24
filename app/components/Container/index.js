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
