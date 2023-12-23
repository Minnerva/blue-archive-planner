export const DB_PATH_BLUE_ARCHIVE_CURRENCY = `/blue-archive-currencies`

export const getUrl = (path) => {
  if (path && path[0] === `/`) {
    path = path.substring(1)
  }
  
  return `${process.env.BASE}${path || ``}`
}

export const findIndex = (array, key, value) => {
  let index = -1

  array.forEach((item, i) => {
    if (item[key] === value) {
      index = i
      return i
    }
  })

  return index
}

export const find = (array, key, value) => {
  const index = findIndex(array, key, value)
  return index > -1 ? array[index] : false
}
