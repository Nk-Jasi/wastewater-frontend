import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/token": "http://localhost:8000",
      "/manholes": "http://localhost:8000",
      "/pipes": "http://localhost:8000",
      "/favorites": "http://localhost:8000"
    }
  }
});
