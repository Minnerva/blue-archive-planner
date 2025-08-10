import y2023 from './banners/2023'
import y2024 from './banners/2024'
import y2025 from './banners/2025'
import y2026 from './banners/2026'

const combined = [...y2023, ...y2024, ...y2025, ...y2026]
const banners = []
const temp_uuid = []

combined.forEach(item => {
  if (temp_uuid.indexOf(item.uuid) === -1) {
    temp_uuid.push(item.uuid)
  } else {
    throw `Duplicate UUID in banner data: ${item.uuid}`
  }

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
