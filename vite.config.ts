import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/x-marketing-ai/',
  plugins: [react()],
})