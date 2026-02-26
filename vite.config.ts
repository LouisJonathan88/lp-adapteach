import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Use relative paths for assets (important for Netlify)
  base: "./",

  // Build configuration optimized for Netlify
  build: {
    // Generate source maps for better debugging
    sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : true,

    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-avatar', '@radix-ui/react-select'],
        },
        // Improve asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(extType || '')) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },

    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // CSS configuration
  css: {
    postcss: {
      plugins: [tailwind()],
    },
    // Improve CSS code splitting and loading
    devSourcemap: true,
  },

  // Server configuration for development
  server: {
    port: 3000,
    host: true, // Allow external connections
  },

  // Preview configuration
  preview: {
    port: 3000,
    host: true,
  },
});
