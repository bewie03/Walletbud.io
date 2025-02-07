import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/splash-api': {
        target: 'https://api6.splash.trade',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/splash-api/, ''),
        secure: false
      },
      '/dexhunter-api': {
        target: 'https://api-us.dexhunterv3.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dexhunter-api/, ''),
        secure: false
      }
    }
  }
})
