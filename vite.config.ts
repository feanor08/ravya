import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@pages': resolve(__dirname, './src/pages'),
        '@styles': resolve(__dirname, './src/styles'),
        '@data': resolve(__dirname, './src/data'),
        '@assets': resolve(__dirname, './src/assets'),
        '@types': resolve(__dirname, './src/types'),
        '@utils': resolve(__dirname, './src/utils')
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production'
    },
    server: {
      port: 3000,
      open: true
    },
    preview: {
      port: 4173
    }
  }
})