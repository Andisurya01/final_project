import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const PORT = import.meta.env.PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT || 3000
  }
})
