<template>
  <canvas :id="chart_id"></canvas>
</template>

<script setup>
  import { watch, onMounted } from 'vue'
  // import Chart from 'chart.js/auto'
  import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'

  // For tree shaking, might not need as only 100kb diff
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip
  )

  const props = defineProps({
    labels: { type: Array, required: true },
    data: { type: Array, required: true }
  })
  // don't need to make multiple chart yet
  const chart_id = `chart`
  let $chart = null

  watch(props, () => {
    updateChart()
  })
  const updateChart = () => {
    $chart.data.labels = props.labels
    props.data.forEach((items, i) => {
      $chart.data.datasets[i].data = items
    })
    $chart.update()
  }

  const applyChart = () => {
    $chart = new Chart(document.querySelector(`#${chart_id}`), {
      type: `line`,
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            borderColor: `#00D8FB`,
            backgroundColor: `#FFFFFF`
          },
          {
            data: [],
            borderColor: `#FFE9F2`,
            backgroundColor: `#FFFFFF`
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
        animation: {
          // duration: 0
        },
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  onMounted(() => {
    applyChart()
  })

  defineExpose({
    updateChart
  })
</script>
