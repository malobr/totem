import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
      VitePWA({
                registerType: "autoUpdate",
                manifest: {
                    name: "Totem Adam Robo",
                    short_name: "Totem Adam",
                    description: "Aplicativo PWA do Adam Totens para demonstração",
                    start_url: "/",
                    display: "fullscreen",
                    background_color: "#f9f9f9",
                    theme_color: "#f9f9f9",
                    lang: "pt",
                    scope: "/",
                    icons: [
                        {
                            src: "/assets/android/android-launchericon-512-512.png",
                            sizes: "512x512",
                            type: "image/png",
                        },
                        {
                            src: "/assets/android/android-launchericon-192-192.png",
                            sizes: "192x192",
                            type: "image/png",
                        },
                        {
                            src: "/assets/android/android-launchericon-144-144.png",
                            sizes: "144x144",
                            type: "image/png",
                        },
                        {
                            src: "/assets/android/android-launchericon-96-96.png",
                            sizes: "96x96",
                            type: "image/png",
                        },
                        {
                            src: "/assets/android/android-launchericon-72-72.png",
                            sizes: "72x72",
                            type: "image/png",
                        },
                        {
                            src: "/assets/android/android-launchericon-48-48.png",
                            sizes: "48x48",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/16.png",
                            sizes: "16x16",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/20.png",
                            sizes: "20x20",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/29.png",
                            sizes: "29x29",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/32.png",
                            sizes: "32x32",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/40.png",
                            sizes: "40x40",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/50.png",
                            sizes: "50x50",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/57.png",
                            sizes: "57x57",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/58.png",
                            sizes: "58x58",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/60.png",
                            sizes: "60x60",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/64.png",
                            sizes: "64x64",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/72.png",
                            sizes: "72x72",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/76.png",
                            sizes: "76x76",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/80.png",
                            sizes: "80x80",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/87.png",
                            sizes: "87x87",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/100.png",
                            sizes: "100x100",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/114.png",
                            sizes: "114x114",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/120.png",
                            sizes: "120x120",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/128.png",
                            sizes: "128x128",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/144.png",
                            sizes: "144x144",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/152.png",
                            sizes: "152x152",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/167.png",
                            sizes: "167x167",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/180.png",
                            sizes: "180x180",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/192.png",
                            sizes: "192x192",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/256.png",
                            sizes: "256x256",
                            type: "image/png",
                        },
                        {
                            src: "/assets/ios/512.png",
                            sizes: "512x512",
                        },
                        {
                            src: "/assets/ios/1024.png",
                            sizes: "1024x1024",
                            type: "image/png",
                        },
                    ],
                    screenshots: [
                        {
                            src: "/assets/screenshots/1.png",
                            sizes: "1080x2300",
                            type: "image/png",
                        },
                        {
                            src: "/assets/screenshots/2.png",
                            sizes: "1080x2300",
                            type: "image/png",
                        },
                        {
                            src: "/assets/screenshots/3.png",
                            sizes: "1080x2300",
                            type: "image/png",
                        },
                        {
                            src: "/assets/screenshots/4.png",
                            sizes: "1080x2300",
                            type: "image/png",
                        },
                        {
                            src: "/assets/screenshots/5.png",
                            sizes: "1080x2300",
                            type: "image/png",
                        },
                    ],
                    dir: "ltr",
                    orientation: "any",
                    categories: ["health", "medical", "utilities"],
                },
                includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png", "**/*.{woff2}"],
                workbox: {
                    globPatterns: ["**/*.{js,css,html,ico,svg,png,jpg,jpeg,avif,webp,woff2,gif}"],
                    maximumFileSizeToCacheInBytes: 5000000,
                    dontCacheBustURLsMatching: /\.\w{8}\./,
                },
            }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.glb"],
});
