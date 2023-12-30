import ShirokoSwimsuitIcon from '@/assets/students/shiroko-swimsuit-icon.webp'
import HimariIcon from '@/assets/students/himari-icon.webp'
import KayokoNewYearIcon from '@/assets/students/kayoko-new-year-icon.webp'
import MiyakoSwimsuitIcon from '@/assets/students/miyako-swimsuit-icon.webp'
import SakiSwimsuitIcon from '@/assets/students/saki-swimsuit-icon.webp'

let students = [
  {
    name: `Kayoko`,
    alter: `New Year`,
    icon: KayokoNewYearIcon
  },
  {
    name: `Himari`,
    alter: ``,
    icon: HimariIcon
  },
  {
    name: `Miyako`,
    alter: `Swimsuit`,
    icon: MiyakoSwimsuitIcon
  },
  {
    name: `Saki`,
    alter: `Swimsuit`,
    icon: SakiSwimsuitIcon
  },
  {
    name: `Shiroko`,
    alter: `Swimsuit`,
    icon: ShirokoSwimsuitIcon
  },
]

students = students.map(student => {
  student.full_name = student.alter ? `${student.name} (${student.alter})` : student.name
  student.key = student.full_name.replace(/[()]/g, ``).replace(/\s/g, `-`).toLocaleLowerCase()
  return student
})

export default students