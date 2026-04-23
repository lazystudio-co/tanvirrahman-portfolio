import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    watch: {
      // Enable polling to improve HMR reliability on some Windows filesystems/editors
      usePolling: true,
      // Check for changes every 100ms
      interval: 100,

    },
  },
});
