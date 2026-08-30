import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "TabPulse",
            fileName: "tab-pulse",
        },
    },
});