import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ mode }) => ({
    plugins: [
        svgr(),
        dts(),
        react(),
        {
            name: "rewrite-paths",
            enforce: "post",
            generateBundle(options, bundle) {
                const basePath = mode === "development" ? "/" : "/MiPresion/";
                Object.values(bundle).forEach(chunk => {
                    if (chunk.type === "chunk" || chunk.type === "asset") {
                        if ("code" in chunk) {
                            chunk.code = chunk.code.replace(/["']\/assets\//g, `"${basePath}assets/`);
                        }
                    }
                });
            }
        },
        viteStaticCopy({
            targets: [
                {
                    src: "404.html",
                    dest: ""
                }
            ]
        })
    ],
    base: mode === "development" ? "/" : "/MiPresion/",
    build: {
        outDir: "docs"
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@/contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
            "@/hooks": fileURLToPath(new URL("./src/hooks", import.meta.url))
        }
    }
}));
