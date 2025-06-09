import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "S_TIDE",
  "description": "A comprehensive toolbox for tidal analysis",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "Download",
        "link": "/Download"
      },
      {
        "text": "User Guide",
        "link": "/User-Guide"
      },
      {
        "text": "Publications",
        "link": "/Publications"
      },
      {
        "text": "About",
        "link": "/about"
      }
    ],
    "sidebar": {
      "/about/": [
        {
          "text": "About S_TIDE",
          "link": "/about/index"
        },
        {
          "text": "Dr. Haidong Pan",
          "link": "/about/Haidong-Pan"
        },
        {
          "text": "Jiashun Wang",
          "link": "/about/Jiashun-Wang"
        }
      ],
      "/reference/": [],
      "/examples/": [
        {
          "text": "ex1",
          "link": "/examples/ex1"
        },
        {
          "text": "ex2",
          "link": "/examples/ex2"
        },
        {
          "text": "examples",
          "link": "/examples/index"
        }
      ],
      "/papers/": [
        {
          "text": "index",
          "link": "/papers/index"
        }
      ],
      "/releases/": [
        {
          "text": "Releases Notes",
          "link": "/releases/index"
        }
      ],
      "/tutorials/": [],
      "/user-guide/": [
        {
          "text": "Functions in S_TIDE",
          "link": "/user-guide/index"
        }
      ],
      "/publications/": [
        {
          "text": "Publications of S_TIDE",
          "link": "/publications/index"
        }
      ],
      "/tutorial/": [
        {
          "text": "Tutorial",
          "link": "/tutorial/index"
        }
      ],
      "/download/": [
        {
          "text": "Download",
          "link": "/download/index"
        },
        {
          "text": "Releases Notes",
          "link": "/download/Releases Notes"
        }
      ]
    },
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/s-tide"
      },
      {
        "icon": "researchgate",
        "link": "https://www.researchgate.net/profile/Haidong-Pan"
      },
      {
        "icon": "rss",
        "link": "/feed.xml"
      }
    ],
    "externalLinkIcon": false,
    "i18nRouting": true,
    "logo": "/images/S_Tide-logo3.svg",
    "outline": {
      "level": 2,
      "label": "On this page"
    },
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "returnToTopLabel": "回到顶部",
    "sidebarMenuLabel": "菜单",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "editLink": {
      "text": "Edit this page on GitHub",
      "pattern": "https://github.com/stide/stide-doc/edit/main/docs/:path"
    },
    "docFooter": {
      "prev": "Previous page",
      "next": "Next Page"
    },
    "siteTitle": "S_TIDE",
    "footer": {
      "message": "Released under the MIT License.",
      "copyright": "Copyright © 2018-present Ph.D. Haidong Pan | This website is maintained by Jiashun Wang"
    }
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://example.com",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "A comprehensive toolbox for tidal analysis",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": true,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
