import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import banner from 'vite-plugin-banner'
import pkg from './package.json'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    banner({
      outDir: './lib',
      content: `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
    }), svgLoader()
  ],
  build: {
    outDir: "./lib",
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'chatgpt',
      fileName: (format) => `chatgpt.${format}.js`
    }
  }
})
