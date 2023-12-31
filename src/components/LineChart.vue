<template>
  <canvas :id="chart_id"></canvas>
</template>

<script setup>
  import { watch, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  // import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
  import dataStudents from '@/data/students.js'
  import { find } from '@/utils'
  import Img1 from '@/assets/icons/pyroxene.webp'
  import Img2 from '@/assets/icons/recruitment-ticket.webp'

  // For tree shaking, might not need as only 100kb diff
  // Chart.register(
  //   LineController,
  //   LineElement,
  //   PointElement,
  //   CategoryScale,
  //   LinearScale,
  //   Tooltip
  // )

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
  // don't need to make multiple chart yet
  const chart_id = `chart`
  let $chart = null

  watch(props, () => {
    updateChart()
  })

  const img1 = new Image()
  img1.src = Img1
  img1.width = 15
  img1.height = 15

  const img2 = new Image()
  img2.src = Img2
  img2.width = 15
  img2.height = 15

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
                const image = new Image()
                image.src = student.icon
                image.width = width
                image.height = height
                image.onload = () => {
                  ctx.drawImage(image, x - (width/2), y - (-10+(banner_index*-1)*height), width, height)
                }
              }
            })
          }
        })
        // const { x, y } = chart.getDatasetMeta(0).data[26]
        // ctx.drawImage(img1, x - 15/2, y - 20, 15, 15)
      }
    }
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
          }
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
