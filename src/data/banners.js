let banners = [
  {
    date: `2023-09-26`,
    duration: 7,
    student_key: `kayoko-new-year`
  },
  {
    date: `2023-12-26`,
    duration: 14,
    student_key: `miyako-swimsuit`
  },
  {
    date: `2023-12-26`,
    duration: 14,
    student_key: `saki-swimsuit`
  },
  {
    date: `2024-01-16`,
    duration: 7,
    student_key: `shiroko-swimsuit`
  },
  {
    date: `2024-05-30`,
    duration: 7,
    student_key: `himari`
  }
]

banners = banners.map(banner => {
  banner.key = `${banner.date}-${banner.student_key}`
  return banner
})
banners.sort((a,b) => {
  if (a.date > b.date) return 1
  if (a.date < b.date) return -1
  return 0
})

export default banners