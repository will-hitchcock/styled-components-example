import { after } from 'utils/style/pseudo'

export const clearfix = () => {
  return {
    [after]: {
      content: '""',
      display: 'table',
      clear: 'both'
    }
  }
}

export default clearfix
