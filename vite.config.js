import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../dist'
    },
    plugins: [
        ViteMinifyPlugin({})
    ],
    root: 'src'
})
