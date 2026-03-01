import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import prerenderPlugin from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // NOTE: vite-plugin-prerender has compatibility issues with Vite 5.x
    // Prerendering temporarily disabled - consider using vite-ssg or a custom solution
    // SEO meta tags still work via react-helmet-async for client-side rendering
    /*
    prerenderPlugin({
      routes: [
        '/',
        '/philosophy',
        '/approach',
        '/investments',
        '/contact-us',
        '/privacy-policy',
        '/terms-and-conditions',
        '/disclaimer',
      ],
      renderer: {
        renderAfterDocumentEvent: 'render-event',
        renderAfterTime: 5000,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/\sdata-reactroot=""/g, '')
          .replace(/\sdata-reactid="[^"]+"/g, '');
        return renderedRoute;
      },
    }),
    */
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
