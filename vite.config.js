import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-qu",
    project: "javascript-react"
  })],

  server: {
    watch: {
      usePolling: true, // Enable polling to detect file changes
    },
  },

  build: {
    sourcemap: true
  }
});