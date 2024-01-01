let banners = [
  {
    date: `2023-09-26`,
    duration: 7,
    student_key: `kayoko-new-year`
  },
  {
    date: `2024-01-09`,
    duration: 7,
    student_key: `hina-swimsuit`
  },
  {
    date: `2024-01-09`,
    duration: 7,
    student_key: `iori-swimsuit`
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
    date: `2024-01-16`,
    duration: 7,
    student_key: `nonomi-swimsuit`
  },
  {
    date: `2024-01-16`,
    duration: 7,
    student_key: `wakamo-swimsuit`
  },
  {
    date: `2024-01-23`,
    duration: 9,
    student_key: `ui-swimsuit`
  },
  {
    date: `2024-01-23`,
    duration: 9,
    student_key: `hinata-swimsuit`
  },
  {
    date: `2024-02-01`,
    duration: 7,
    student_key: `hanako-swimsuit`
  },
  {
    date: `2024-02-15`,
    duration: 7,
    student_key: `mimori-swimsuit`
  },
  {
    date: `2024-03-16`,
    duration: 12,
    student_key: `haruna-tracksuit`
  },
  {
    date: `2024-03-16`,
    duration: 12,
    student_key: `yuuka-tracksuit`
  },
  {
    date: `2024-03-16`,
    duration: 12,
    student_key: `mari-tracksuit`
  },
  {
    date: `2024-04-18`,
    duration: 14,
    student_key: `misaka-mikoto`
  },
  {
    date: `2024-04-18`,
    duration: 14,
    student_key: `shokuhou-misaki`
  },
  {
    date: `2024-05-02`,
    duration: 8,
    student_key: `yukari`
  },
  {
    date: `2024-05-16`,
    duration: 14,
    student_key: `renge`
  },
  {
    date: `2024-05-16`,
    duration: 14,
    student_key: `kikyou`
  },
  {
    date: `2024-05-30`,
    duration: 7,
    student_key: `himari`
  },
  {
    date: `2024-06-13`,
    duration: 7,
    student_key: `karin-bunny`
  },
  {
    date: `2024-06-13`,
    duration: 7,
    student_key: `neru-bunny`
  },
  {
    date: `2024-06-13`,
    duration: 7,
    student_key: `akane-bunny`
  },
  {
    date: `2024-06-13`,
    duration: 7,
    student_key: `asuna-bunny`
  },
  {
    date: `2024-06-20`,
    duration: 14,
    student_key: `hare-camping`
  },
  {
    date: `2024-06-20`,
    duration: 14,
    student_key: `kotama-camping`
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