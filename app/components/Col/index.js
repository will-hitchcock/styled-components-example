/**
*
* Col
*
*/
import styled, { css } from 'styled-components'
import { media } from 'utils/style/mixins'

export const colWidth = num => {
  if (!num) return null
  if (num === 'auto') {
    return css`
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    `
  }

  const width = 100 / (12 / num)
  return `
    flex-basis: ${width}%;
    max-width: ${width}%;
  `
}

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  ${props => props.reverse
    ? 'flex-direction: column-reverse;'
    : null
  }

  ${props => colWidth(props.xs)}

  ${props => media('sm')`
    ${colWidth(props.sm)}
  `}

  ${props => media('md')`
    ${colWidth(props.md)}
  `}

  ${props => media('lg')`
    ${colWidth(props.lg)}
  `}
`

export default Col
