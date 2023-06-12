import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
 /*  server: {
    https: {
      key: './.cert/key.pem',
      cert:  './.cert/cert.pem',
    },
  }, */
  plugins: [react()]
});