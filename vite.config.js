import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base:
        process.env.VERCEL === "1" || mode === "development"
            ? "/"
            : "/mobile-apps-distribution-page/",
    build: {
        sourcemap: false,
    },
}));
