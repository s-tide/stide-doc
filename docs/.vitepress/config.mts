import { defineConfig } from "vitepress";

export default defineConfig({
  // ==================== 基础配置 ====================
  // 网站标题
  title: "S_TIDE",
  // 网站描述
  description: "A comprehensive toolbox for tidal analysis",
  // 显示最后更新时间
  lastUpdated: true,
  // 忽略死链检查（文档中的失效链接不会导致构建失败）
  ignoreDeadLinks: true,

  // ==================== 主题配置 ====================
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "Download", link: "/download" },
      { text: "User Guide", link: "/user-guide" },
      { text: "Publications", link: "/publications" },
      { text: "About", link: "/about" },
    ],

    // 侧边栏配置（按路径分组）
    sidebar: {
      "/about/": [
        { text: "About S_TIDE", link: "/about/index" },
        { text: "About the Website", link: "/about/website" },
        { text: "Dr. Haidong Pan", link: "/about/Haidong-Pan" },
        { text: "Jiashun Wang", link: "/about/Jiashun-Wang" },
      ],
      "/reference/": [], // 空数组表示隐藏侧边栏
      "/examples/": [
        { text: "ex1", link: "/examples/ex1" },
        { text: "ex2", link: "/examples/ex2" },
        { text: "examples", link: "/examples/index" },
      ],
      "/papers/": [{ text: "index", link: "/papers/index" }],
      "/releases/": [{ text: "Releases Notes", link: "/releases/index" }],
      "/tutorials/": [],
      "/user-guide/": [{ text: "Functions in S_TIDE", link: "/user-guide/index" }],
      "/publications/": [{ text: "Publications of S_TIDE", link: "/publications/index" }],
      "/tutorial/": [{ text: "Tutorial", link: "/tutorial/index" }],
      "/download/": [
        { text: "Download", link: "/download/index" },
        { text: "Releases Notes", link: "/download/Releases Notes" },
      ],
    },

    // 社交链接（GitHub/ResearchGate/RSS）
    socialLinks: [
      { icon: "github", link: "https://github.com/s-tide/stide-doc" },
      { icon: "researchgate", link: "https://www.researchgate.net/publication/369066450_S_TIDE_toolbox" },
      { icon: "rss", link: "/feed.xml" },
    ],

    // 禁用外部链接图标
    externalLinkIcon: false,
    // 启用多语言路由
    i18nRouting: true,
    // Logo 路径（位于 public/images/）
    logo: "/images/S_Tide-logo3.svg",
    // 右侧大纲配置
    outline: { level: 2, label: "On this page" },

    // ==================== 搜索配置 ====================
    search: {
      provider: "local", // 本地搜索（无需 Algolia）
      options: {
        // 中文搜索配置
        locales: {
          zh: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
          // 英文搜索配置
          en: {
            placeholder: "Search docs",
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "Clear query",
                  resetButtonAriaLabel: "Clear query",
                  cancelButtonText: "Cancel",
                  cancelButtonAriaLabel: "Cancel",
                },
                startScreen: {
                  recentSearchesTitle: "Recent searches",
                  noRecentSearchesText: "No recent searches",
                  saveRecentSearchButtonTitle: "Save search",
                  removeRecentSearchButtonTitle: "Remove search",
                  favoriteSearchesTitle: "Favorites",
                  removeFavoriteSearchButtonTitle: "Remove from favorites",
                },
                errorScreen: {
                  titleText: "Unable to fetch results",
                  helpText: "You may want to check your network connection",
                },
                footer: {
                  selectText: "select",
                  navigateText: "navigate",
                  closeText: "close",
                  searchByText: "Search by",
                },
                noResultsScreen: {
                  noResultsText: "No results for",
                  suggestedQueryText: "You can try searching for",
                  reportMissingResultsText: "You think it should have results?",
                  reportMissingResultsLinkText: "Click here to report it",
                },
              },
            },
          },
        },
      },
    },

    // ==================== UI 文本配置 ====================
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    // ==================== 编辑链接 ====================
    editLink: {
      text: "Edit this page on GitHub",
      pattern: "https://github.com/s-tide/stide-doc/edit/main/docs/:path",
    },

    // ==================== 页脚导航 ====================
    docFooter: {
      prev: "Previous page",
      next: "Next Page",
    },

    // ==================== 页脚信息 ====================
    siteTitle: "S_TIDE",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2018-present Ph.D. Haidong Pan | This website is maintained by Jiashun Wang",
    },
  },

  // ==================== 构建配置 ====================
  // 源文件目录（默认 docs，此处改为 pages）
  srcDir: "pages",
  // 静态资源目录
  assetsDir: "assets",

  // ==================== Sitemap 配置 ====================
  sitemap: {
    hostname: "https://s-tide.github.com/stide-doc/",
    lastmodDateOnly: false,
  },

  // ==================== 多语言配置 ====================
  locales: {}, // 可扩展多语言
  cacheDir: ".vitepress/cache",
  titleTemplate: "A comprehensive toolbox for tidal analysis",
  lang: "en-US",
  base: "/", // 部署子路径时需修改（如 GitHub Pages）
  //base: "https://s-tide.github.io/stide-doc/", // GitHub Pages 部署路径
  outDir: ".vitepress/dist",
  cleanUrls: true, // 生成无 .html 后缀的 URL

  // ==================== 路径重写规则 ====================
  rewrites: {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md",
  },

  // ==================== HTML Head 配置 ====================
  head: [
    // Favicon 配置
    [
      "link",
      {
        rel: "icon",
        href: "favicon.ico",
      },
    ],
    // Google Analytics 示例（取消注释并替换 ID 后启用）
    // [
    //   "script",
    //   {
    //     async: "true",
    //     src: "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID",
    //   },
    // ],
    // [
    //   "script",
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //    function gtag(){dataLayer.push(arguments);}
    //    gtag('js', new Date());
    //    gtag('config', 'GA_MEASUREMENT_ID');`,
    // ],
  ],
});