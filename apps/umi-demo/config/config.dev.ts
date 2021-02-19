import { defineConfig } from 'umi'
export default defineConfig({
  devtool: 'source-map',
  dynamicImport: {},
  fastRefresh: {},
  hash: true,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true
    }
  },
  define: {
    UMI_ENV: 'development'
  }
})
