import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function manualChunks(id: string) { //https://rollupjs.org/configuration-options/#output-manualchunks
    if (id.includes("react-dom")) {
        return "vendor-dom";
    }
    if (id.includes("all-samples-2")) {
        return "samples";
    }
    if (id.includes("motion/react")) {
        return "motion";
    }
    if (id.includes("@radix-ui")) {
        return "radix";
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
