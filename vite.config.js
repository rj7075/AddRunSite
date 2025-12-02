import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ✅ Add here (INSIDE the config object)
  css: {
    devSourcemap: false, // removes source maps in production
  },

  build: {
    cssCodeSplit: true, // splits CSS → removes render-blocking 35 KB file
    minify: "esbuild",
    sourcemap: false,
  },
});
