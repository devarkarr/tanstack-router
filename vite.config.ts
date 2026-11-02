import path from 'path'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
    nodePolyfills({ include: ['domain'] }),
  ],
})

export default config
