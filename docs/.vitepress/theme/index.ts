// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

import useVisitData from './hooks/useVisitData'

async enhanceApp({ app, router, siteData }: EnhanceAppContext) {
  // ...
  if (inBrowser) {
    // 网站访问量统计，路由加载完成，在加载页面组件后（在更新页面组件之前）调用。
    router.onAfterPageLoad = (to: string) => {
      useVisitData()
    }
  }
  // ...
}