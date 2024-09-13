import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sempervirens/",
  plugins: [
    react(),
    vercel() // Agrega el plugin de Vercel aquí
  ],
});
