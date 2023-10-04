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
      assets: './src/assets',
      app: './src/app',
      entities: './src/entities',
      features: './src/features',
      pages: './src/pages',
      shared: './src/shared',
      widgets: './src/widgets',
    },
  },
})
