<template>
  <div class="text-3xl font-bold text-center">{{ date.format(`YYYY-MM`) }}</div>
  <canvas ref="chart"></canvas>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import dayjs from 'dayjs'
  import Chart from 'chart.js/auto'

  const chart = ref(null)
  const date = reactive(dayjs())

  const daysInMonth = date.daysInMonth()
  const labels = []
  const data = []

  for (let i = 1; i <= daysInMonth; i++) {
    const day = `${i}`.length === 1 ? `0${i}` : i
    labels.push(`${date.format(`YYYY-MM`)}-${day}`)
    data.push(i)
  }

  onMounted(() => {
    const c = new Chart(chart.value, {
      type: `line`,
      data: {
        labels: labels,
        datasets: [
          {
            data: data
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          }
        }
      }
    })
    // console.log(c)
  })
</script>
