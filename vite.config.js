import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // CRÍTICO: Asegura que los assets se carguen correctamente en rutas relativas de cPanel
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
    },
});
