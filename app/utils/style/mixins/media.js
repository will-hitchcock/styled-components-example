export const media = label => {
  const sizes = {
    xs: 375,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1680
  }

  return args => {
    const query = `@media (min-width: ${sizes[label]}px)`
    return {
      [query]: args
    }
  }
}

export default media
