/**
*
* Col
*
*/
import styled, { css } from 'styled-components'
import { media } from 'utils/style/mixins'

/**
*
* Utility function for calculating ccol size
* values below 1 are used to calculate percentage widths
* values between 1 and 12 are used for 12 column grid pattern
*
**/
export const colSize = num => num < 1 ? num * 100 : 100 / (12 / num)

/**
*
* Mixin for setting column width
* returns css for flex-basis and max-width depending on num
* uses colSize to determine width
* also accepts 'auto'
*
**/
export const colWidth = num => {
  if (!num) return null
  if (num === 'auto') {
    return css`
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    `
  }

  const width = colSize(num)
  return `
    flex-basis: ${width}%;
    max-width: ${width}%;
  `
}

/**
*
* Mixin for setting offset
* uses colSize to calculate margin for the given side
*
**/
export const colOffset = (num, side) => `
  margin-${side}: ${colSize(num)}%;
`

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding: 0.5rem;
  ${''/* ^ We should allow this value to be configured */}

  ${props => props.reverse
    ? 'flex-direction: column-reverse;'
    : null
  }

  ${props => colOffset(props.lOffset, 'left')}
  ${props => colOffset(props.rOffset, 'right')}

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

  ${props => media('xl')`
    ${colWidth(props.xl)}
  `}
`

export const validateSizeProp = (props, propName, componentName) => {
  if (props[propName] === undefined) return null
  if (typeof props[propName] === 'number' && (props[propName] < 0 || props[propName] > 12)) {
    return new Error(
      `Invalid prop '${props[propName]}' for '${propName}' supplied to '${componentName}'. If '${props[propName]}' is a number it must be between 0 and 12. Validation failed.`
    )
  }
  if (typeof props[propName] !== 'number' && props[propName] !== 'auto') {
    return new Error(
      `Invalid prop '${props[propName]}' for '${propName}' supplied to '${componentName}'. '${props[propName]}' must be a number or the string 'auto' Validation failed.`
    )
  }
  return null
}

Col.propTypes = {
  lOffset: validateSizeProp,
  rOffset: validateSizeProp,
  xs: validateSizeProp,
  sm: validateSizeProp,
  md: validateSizeProp,
  lg: validateSizeProp,
  xl: validateSizeProp
}

export default Col
