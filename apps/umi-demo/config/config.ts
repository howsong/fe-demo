import { defineConfig } from 'umi'
import { ROUTES } from '../src/contants/routes'

export default defineConfig({
  dva: false,
  dynamicImport: {},
  layout: false,
  locale: {},
  // chainWebpack(memo, { env, webpack, createCSSRule }) {
  //   memo.cache({ hashAlgorithm: 'md4' })
  // },
  nodeModulesTransform: { type: 'none' },
  title: 'umi-demo',
  theme: {
    'primary-color': '#5E6CEC',
    'border-radius-base': '4px'
  },
  routes: [
    {
      path: ROUTES.ROOT,
      component: 'index',
      // wrappers: ['@/wrappers/auth'],
      routes: [
        // { path: ROUTES.HOME, component: 'home', exact: true },
        {
          path: ROUTES.ROOT,
          component: '@/layouts/index',
          routes: [
            { path: ROUTES.HOME, component: 'home' },
            { path: ROUTES.VISUAL, component: 'visual' },
            { path: ROUTES.ANTD, component: 'antd' }
            // { component: '404' }
          ]
        }
      ]
    }
  ]
})
