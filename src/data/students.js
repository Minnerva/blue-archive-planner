import ShirokoSwimsuitPortrait from '@/assets/students/shiroko-swimsuit-icon.webp'
import HimariPortrait from '@/assets/students/himari-icon.webp'

let students = [
  {
    name: `Shiroko`,
    alter: `Swimsuit`,
    icon: ShirokoSwimsuitPortrait
  },
  {
    name: `Himari`,
    alter: ``,
    icon: HimariPortrait
  }
]

students = students.map(student => {
  student.full_name = student.alter ? `${student.name} (${student.alter})` : student.name
  student.key = student.full_name.replace(/[()]/g, ``).replace(/\s/g, `-`).toLocaleLowerCase()
  return student
})

export default students