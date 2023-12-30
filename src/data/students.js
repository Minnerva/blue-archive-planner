import ShirokoSwimsuitPortrait from '@/assets/students/shiroko-swimsuit-portrait.webp'
import HimariPortrait from '@/assets/students/himari-portrait.webp'

let students = [
  {
    name: `Shiroko`,
    alter: `Swimsuit`,
    portrait: ShirokoSwimsuitPortrait
  },
  {
    name: `Himari`,
    alter: ``,
    portrait: HimariPortrait
  }
]

students = students.map(student => {
  student.full_name = student.alter ? `${student.name} (${student.alter})` : student.name
  student.key = student.full_name.replace(/[()]/g, ``).replace(/\s/g, `-`).toLocaleLowerCase()
  return student
})

export default students