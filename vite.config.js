import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'NYT_API_KEY': JSON.stringify(env.REACT_APP_NYT_API_KEY)
    },
    plugins: [react()],
  }
})
