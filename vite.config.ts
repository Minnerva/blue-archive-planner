import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/gacha-tracker-online/`,
  plugins: [vue()],
})
