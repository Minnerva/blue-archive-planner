import dayjs from 'dayjs'

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

export const getDayjsNoTime = (dateString) => {
  return dayjs(`${dateString} 00:00:00`)
}

export const getOptionsYear = () => {
  const items = []
  const current_year = dayjs().year()

  for (let i = 2021; i <= (current_year+1); i++) {
    let item = {
      value: i,
      label: i
    }
    items.push(item)
  }

  return items
}

export const getOptionsMonth = () => {
  const items = []

  for (let i = 1; i <= 12; i++) {
    let item = {
      value: i,
      label: i <= 9 ? `0${i}` : i
    }
    items.push(item)
  }

  return items
}

export const getOptionsDay = (year, month) => {
  const items = []
  const days = dayjs(`${year}-${month}-01`).daysInMonth()

  for (let i = 1; i <= days; i++) {
    let item = {
      value: i,
      label: i <= 9 ? `0${i}` : i
    }
    items.push(item)
  }

  return items
}

export const getBlueArchiveCurrencyToPull = (totalCurrency) => {
  return Math.floor(totalCurrency/120)
}

export const getBlueArchiveTotalPull = ({ pyroxene, free_pull }) => {
  const pyroxene_pull = Math.floor(pyroxene/120)
  return pyroxene_pull + free_pull
}

export const getBlueArchiveSpark = (total_pull) => {
  return Math.floor(total_pull/200)
}

export const formatCurrency = (number) => {
  return new Intl.NumberFormat(`en-US`, {}).format(number)
}
