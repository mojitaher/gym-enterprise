import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// Absolute path to the single Tailwind entry (the file that has `@import "tailwindcss"`).
const tailwindEntry = fileURLToPath(new URL('./src/index.css', import.meta.url)).replace(/\\/g, '/')

/**
 * Auto-injects `@reference` at the top of every *.module.css so `@apply` and
 * Tailwind theme values work inside CSS Modules — without writing it by hand in
 * each file. Runs `pre`, before the Tailwind plugin processes the CSS.
 */
function tailwindReferenceInModules() {
  return {
    name: 'tailwind-reference-in-modules',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      const [filepath] = id.split('?')
      if (!filepath.endsWith('.module.css')) return null
      if (code.includes('@reference')) return null
      return { code: `@reference "${tailwindEntry}";\n${code}`, map: null }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindReferenceInModules(), react(), tailwindcss()],
})
