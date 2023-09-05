import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for production build
  },
  server: {
    port: 3000, // Port for development server
    proxy: {
      "/api": "http://localhost:5000", // Proxy API requests to Express server
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Create aliases for imports (optional)
    },
  },
});
