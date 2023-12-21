export const getUrl = (path) => {
  if (path && path[0] === `/`) {
    path = path.substring(1)
  }
  
  return `${process.env.BASE}${path || ``}`
}