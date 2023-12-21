<template>
  <div class="text-3xl font-bold text-center">{{ date.format(`YYYY-MM`) }}</div>
  
  <div class="flex justify-center">
    <div class="w-full max-w-3xl h-72">
      <canvas ref="chart"></canvas>
    </div>
  </div>

  <div class="mt-3 border border-gray-300 rounded-xl">
    <div class="h-8 bg-slate-300 rounded-t-xl"></div>
    <div class="bg-white rounded-b-xl">
      <div class="p-2">
        Hello World
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import dayjs from 'dayjs'
  // import Chart from 'chart.js/auto'
  import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip
  )

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
            data: data,
            borderColor: `#A00`,
            backgroundColor: `#00A`
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
  })
</script>
