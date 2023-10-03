import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@app': path.resolve(__dirname, '/src/app'),
      '@entities': path.resolve(__dirname, '/src/entities'),
      '@features': path.resolve(__dirname, '/src/features'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@shared': path.resolve(__dirname, '/src/shared'),
      '@widgets': path.resolve(__dirname, '/src/widgets'),
    },
  },
})
