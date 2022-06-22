import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent'}
  },
  publicDir: '/public'
})
