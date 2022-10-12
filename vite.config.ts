import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      filename: "sw.ts",
      includeAssets: ["*.svg"],
      includeManifestIcons: false,
      injectRegister: false,
      manifest: {
        name: "Netflix Clone",
        short_name: "Netflix",
        description: "Almost exact clone of Netflix .",
        theme_color: "#000000",
        icons: [
          {
            src: "netflix.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      srcDir: "src/service-worker",
      strategies: "injectManifest",
    }),
  ],
  server: {
    host: true,
  },
});
