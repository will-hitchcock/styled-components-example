import media from './media'
/**
*
* Utility function for calculating ccol size
* values below 1 are used to calculate percentage widths
* values between 1 and 12 are used for 12 column grid pattern
*
**/
const colSize = num => num < 1 ? num * 100 : 100 / (12 / num)

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
    return {
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%'
    }
  }

  const width = colSize(num)
  return {
    flexBasis: `${width}%`,
    maxWidth: `${width}%`
  }
}

/**
*
* Mixin for setting offset
* uses colSize to calculate margin for the given side
*
**/
export const colOffset = (num, side) => {
  const property = `margin-${side}`
  return {
    [property]: `${colSize(num)}%`
  }
}

export const col = ({ padding, reverse, lOffset, rOffset, xs, sm, md, lg, xl }) => {
  return {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    padding: padding || '0.5rem',
    flexDirection: reverse ? 'column-reverse' : 'initial',
    ...colOffset(lOffset, 'left'),
    ...colOffset(rOffset, 'right'),
    ...colWidth(xs),
    ...media('sm')(colWidth(sm)),
    ...media('md')(colWidth(md)),
    ...media('lg')(colWidth(lg)),
    ...media('xl')(colWidth(xl))
  }
}

export default col
