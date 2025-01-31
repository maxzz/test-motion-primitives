import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function manualChunks(id: string) { //https://rollupjs.org/configuration-options/#output-manualchunks
    if (id.includes("all-samples-2")) {
        return "samples";
    }
}

export default defineConfig({ // https://vite.dev/config/
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks,
            },
        },
    },
    server: {
        port: 3000,
    },
});
