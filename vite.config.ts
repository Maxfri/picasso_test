import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: './src' },
      { find: '@pages', replacement: './src/pages' },
      { find: '@widgets', replacement: './src/widgets' },
      { find: '@features', replacement: './src/features' },
      { find: '@entities', replacement: './src/entities' },
      { find: '@shared', replacement: './src/shared' },
    ],
  },
})
