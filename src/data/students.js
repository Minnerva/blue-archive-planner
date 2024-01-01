let students = [
  {
    name: `Akane`,
    alter: `Bunny`
  },
  {
    name: `Asuna`,
    alter: `Bunny`
  },
  {
    name: `Hanako`,
    alter: `Swimsuit`
  },
  {
    name: `Hare`,
    alter: `Camping`
  },
  {
    name: `Haruna`,
    alter: `Tracksuit`
  },
  {
    name: `Himari`,
    alter: ``
  },
  {
    name: `Hina`,
    alter: `Swimsuit`
  },
  {
    name: `Hinata`,
    alter: `Swimsuit`
  },
  {
    name: `Iori`,
    alter: `Swimsuit`
  },
  {
    name: `Karin`,
    alter: `Bunny`
  },
  {
    name: `Kayoko`,
    alter: `New Year`
  },
  {
    name: `Kikyou`,
    alter: ``
  },
  {
    name: `Kotama`,
    alter: `Camping`
  },
  {
    name: `Mari`,
    alter: `Tracksuit`
  },
  {
    name: `Mimori`,
    alter: `Swimsuit`
  },
  {
    name: `Misaka Mikoto`,
    alter: ``
  },
  {
    name: `Miyako`,
    alter: `Swimsuit`
  },
  {
    name: `Neru`,
    alter: `Bunny`
  },
  {
    name: `Nonomi`,
    alter: `Swimsuit`
  },
  {
    name: `Renge`,
    alter: ``
  },
  {
    name: `Saki`,
    alter: `Swimsuit`
  },
  {
    name: `Shiroko`,
    alter: `Swimsuit`
  },
  {
    name: `Shokuhou Misaki`,
    alter: ``
  },
  {
    name: `Ui`,
    alter: `Swimsuit`
  },
  {
    name: `Wakamo`,
    alter: `Swimsuit`
  },
  {
    name: `Yukari`,
    alter: ``
  },
  {
    name: `Yuuka`,
    alter: `Tracksuit`
  }
]

students = students.map(student => {
  student.full_name = student.alter ? `${student.name} (${student.alter})` : student.name
  student.key = student.full_name.replace(/[()]/g, ``).replace(/\s/g, `-`).toLocaleLowerCase()
  student.icon = new URL(`/src/assets/students/${student.key}-icon.webp`, import.meta.url).href
  return student
})

export default students