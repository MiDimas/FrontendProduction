import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr({ include: '**/*.svg' }), react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __API__: JSON.stringify('http://localhost:8000'),
        __IS_DEV__: JSON.stringify(true),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
