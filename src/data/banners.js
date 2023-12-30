let banners = [
  {
    date: `2024-01-16`,
    duration: 7,
    student: `shiroko-swimsuit`
  },
  {
    date: `2024-05-30`,
    duration: 7,
    student: `himari`
  }
]

banners = banners.map(banner => {
  banner.key = `${banner.date}-${banner.student}`
  return banner
})
banners.sort((a,b) => {
  if (a.date > b.date) return 1
  if (a.date < b.date) return -1
  return 0
})

export default banners