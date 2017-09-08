import { focus } from 'utils/style/pseudo'

export const button = props => {
  return {
    display: 'inline-block',
    'border-radius': '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    color: 'white',
    border: '2px solid white',
    cursor: 'pointer',
    background: props.color || 'palevioletred',
    [focus]: {
      outline: 'none'
    }
  }
}

export default button
