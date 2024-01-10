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
    name: `Himari`
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
    name: `Kikyou`
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
    name: `Misaka Mikoto`
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
    name: `Renge`
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
    name: `Shokuhou Misaki`
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
    name: `Yukari`
  },
  {
    name: `Yuuka`,
    alter: `Tracksuit`
  },
  {
    name: `Wakamo`
  },
  {
    name: `Cherino`
  },
  {
    name: `Marina`
  },
  {
    name: `Chise`,
    alter: `Swimsuit`
  },
  {
    name: `Izuna`,
    alter: `Swimsuit`
  },
  {
    name: `Meru`
  },
  {
    name: `Shun`
  },
  {
    name: `Shun`,
    alter: `Small`
  },
  {
    name: `Saya`,
    alter: `Casual`
  },
  {
    name: `Saya`
  },
  {
    name: `Kokona`
  },
  {
    name: `Cherino`,
    alter: `Hot Spring`
  },
  {
    name: `Chinatsu`
  },
  {
    name: `Chinatsu`,
    alter: `Hot Spring`
  },
  {
    name: `Ichika`
  },
  {
    name: `Kasumi`
  },
  {
    name: `Kotori`
  },
  {
    name: `Kotori`,
    alter: `Cheer Squad`
  },
  {
    name: `Mari`
  },
  {
    name: `Noa`
  },
  {
    name: `Nodoka`
  },
  {
    name: `Nodoka`,
    alter: `Hot Spring`
  },
  {
    name: `Shigure`
  },
  {
    name: `Shigure`,
    alter: `Hot Spring`
  },
  {
    name: `Utaha`
  },
  {
    name: `Utaha`,
    alter: `Cheer Squad`
  },
  {
    name: `Yuuka`
  },
  {
    name: `Saori`
  },
  {
    name: `Hiyori`
  },
  {
    name: `Sumire`
  },
  {
    name: `Eimi`
  },
  {
    name: `Eimi`,
    alter: `Swimsuit`
  }
]

students = students.map(student => {
  if (!student.alter) student.alter = ``

  student.full_name = student.alter ? `${student.name} (${student.alter})` : student.name
  student.key = student.full_name.replace(/[()]/g, ``).replace(/\s/g, `-`).toLocaleLowerCase()
  student.icon = new URL(`/src/assets/students/${student.key}-icon.webp`, import.meta.url).href
  return student
})

export default students