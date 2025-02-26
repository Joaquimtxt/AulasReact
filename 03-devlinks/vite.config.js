import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true, //Habilitar rede externa
    port: 3000, //porta para a conexão, altere quando
    //necessário
    open: true, //Aqui abre automaticamente o navegador 
    // e inicia o server
  },
})
