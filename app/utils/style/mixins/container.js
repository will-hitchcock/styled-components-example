import { media } from './media'

export const container = ({ reverse, fluid }) => {
  return {
    marginRight: 'auto',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap',
    flexDirection: reverse ? 'row-reverse' : 'row',
    paddingRight: fluid ? 0 : null,
    paddingLeft: fluid ? 0 : null,
    ...media('sm')({ width: '49rem' }),
    ...media('md')({ width: '65rem' }),
    ...media('lg')({ width: '76rem' })
  }
}

export default container
