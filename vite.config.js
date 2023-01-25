import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import data from './data.json';

export default defineConfig({
    build: {
        copyPublicDir: true,
        emptyOutDir: true,
        outDir: '../dist'
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            inject: {
                data
            }
        })
    ],
    publicDir: '../public',
    root: 'src'
})
