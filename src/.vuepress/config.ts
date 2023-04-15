import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from '@vuepress/utils'
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)

//自定义用户配置
export default defineUserConfig({
  base: "/my-docs/",

  // 多语言设置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr Horse",
      description: "Mr Horse的个人主页",
      // 设置favicon
      head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    },
  },
  // 主题设置
  theme,
   // 插件设置

 plugins: [
  // 搜索插件

  searchProPlugin({
  }),

 ],

  shouldPrefetch: false,
});