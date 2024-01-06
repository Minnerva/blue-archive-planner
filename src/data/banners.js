import y2023 from './banners/2023'
import y2024 from './banners/2024'

const combined = [...y2023, ...y2024]
const banners = []

combined.forEach(item => {
  item.students.forEach(student_key => {
    banners.push({
      uuid: item.uuid,
      key: `${item.uuid}-${student_key}`,
      date: item.date,
      duration: item.duration,
      student_key
    })
  })
})

banners.sort((a,b) => {
  if (a.date > b.date) return 1
  if (a.date < b.date) return -1
  return 0
})

export default banners
