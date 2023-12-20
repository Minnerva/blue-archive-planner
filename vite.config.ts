import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import EnvironmentPlugin from 'vite-plugin-environment'
import 'dotenv/config'

export default defineConfig({
  base: process.env.BASE,
  plugins: [
    vue(),
    EnvironmentPlugin([
      `FIREBASE_API_KEY`,
      `FIREBASE_AUTH_DOMAIN`,
      `FIREBASE_PROJECT_ID`,
      `FIREBASE_STORAGE_BUCKET`,
      `FIREBASE_MESSAGING_SENDER_ID`,
      `FIREBASE_APP_ID`,
      `FIREBASE_MEASUREMENT_ID`
    ])
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(`./src`, import.meta.url))
    }
  }
})
