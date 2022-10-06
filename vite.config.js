import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import * as path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    resolve: {
      alias: [
        { find: "@src", replacement: path.resolve(__dirname, "src") },
        { find: /^~/, replacement: "" },
      ],
    },
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_PORT || "3001"),
    },
  });
};
