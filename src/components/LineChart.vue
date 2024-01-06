<template>
  <canvas :id="chart_id"></canvas>
</template>

<script setup>
  import { watch, onMounted } from 'vue'
  import { useStore } from 'vuex'
  // import Chart from 'chart.js/auto'
  import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
  import dataStudents from '@/data/students.js'
  import { find } from '@/utils'

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
    data: { type: Array, required: true },
    pullBanners: {
      type: Array,
      default () {
        return []
      }
    }
  })

  const store = useStore()
  // don't need to make multiple chart yet
  const chart_id = `chart`
  let $chart = null
  const images = {} 

  watch(props, () => {
    updateChart()
  })

  Chart.register({
    id: `default`,

    afterDatasetsDraw (chart) {
      const data = chart.getDatasetMeta(0).data
      
      if (data.length > 0) {
        const { ctx } = chart
        const width = 14 * chart.currentDevicePixelRatio
        const height = 16 * chart.currentDevicePixelRatio

        data.forEach(({ $context }, index) => {
          const data2 = chart.getDatasetMeta(1).data[index]
          const $raw1 = $context.raw
          const $raw2 = data2.$context.raw
          
          if (($raw1 || $raw2) && props.pullBanners[index]) {
            const x = $raw1 ? data[index].x : data2.x
            const y = $raw1 ? data[index].y : data2.y
            const banners = props.pullBanners[index]
            banners.forEach((banner, banner_index) => {
              const student = find(dataStudents, { key: banner.student_key })
              if (student) {
                if (!images[student.key]) {
                  const image = new Image(width, height)
                  image.src = student.icon
                  images[student.key] = image
                }

                ctx.drawImage(images[student.key], x - (width/2), y - (-10+(banner_index*-1)*height), width, height)
              }
            })
          }
        })
      }
    }
  })
  
  const updateChart = () => {
    const { configs } = store.state

    $chart.data.labels = props.labels
    props.data.forEach((items, i) => {
      $chart.data.datasets[i].data = items
    })

    $chart.options.scales.y.ticks.stepSize = configs.chart_display === `pull` ? 100 : null
    $chart.update()
  }

  const applyChart = () => {
    $chart = new Chart(document.querySelector(`#${chart_id}`), {
      type: `line`,
      data: {
        labels: [],
        datasets: [
          {
            label: `Record`,
            data: [],
            borderColor: `#00D8FB`,
            backgroundColor: `#FFFFFF`
          },
          {
            label: `Estimate`,
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
          // legend: {
          //   display: false
          // }
        },
        animation: {
          // duration: 0
        },
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 100,
              color: (context) => {
                return context.tick.value < 0 ? 'red' : ``
              }
            },
            grid: {
              color: (context) => {
                return context.tick.value <= 0 ? 'red' : `#EEE`
              }
            }
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
