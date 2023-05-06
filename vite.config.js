import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgLoader()],
  build: {
    outDir: "./lib",
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'chatgpt',
      fileName: (format) => `chatgpt.${format}.js`
    }
  }
})
