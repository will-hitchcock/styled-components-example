/**
*
* Block
*
*/

import styled, { css } from 'styled-components'
import { clearfix, media } from 'utils/style/mixins'

const Block = styled.div`
  ${clearfix}
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.neutral1};
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 4px 16px 0 rgba(27, 37, 47, 0.04);

  ${props => props.slim
    ? css`
      padding: 24px 32px;
      margin: 40px 136px;
      width: $base-unit * 79;

      &:first-of-type {
        margin-top: 48px;
      }

      ${media('sm')`
        margin: 40px auto;
        width: auto;
      `}
    `
    : css`
      margin: 0 0 24px;
      padding: $base-unit * 2;
      width: 100%;

      ${media('sm')`
        margin-bottom: 16px;
      `}

      h1 {
        margin-top: 0;
      }
    `}
`

export default Block
