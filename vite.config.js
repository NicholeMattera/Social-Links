import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
    build: {
        outDir: '../dist'
    },
    plugins: [
        ViteMinifyPlugin({})
    ],
    root: 'src'
})
