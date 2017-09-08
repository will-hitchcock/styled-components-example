export const showHide = ({ showing }) => {
  let display
  if (!showing) display = 'none'
  else if (showing === true) display = 'block'
  else display = showing

  return { display }
}

export default showHide
