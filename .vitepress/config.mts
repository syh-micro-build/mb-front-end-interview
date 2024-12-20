import { defineConfig } from 'vitepress'
import { getSpecificFilesInfo } from '../utils'
import { questionsMenu } from './menu-config.mts';

// https://vitepress.dev/reference/site-config
export default async () => {
  const questionsSidebar = await genSpecSidebar(questionsMenu, 'src/questions')

  return defineConfig({
    base: "/mb-front-end-interview/",
    outDir: "../dist",
    title: "前端面试题库",
    description: "致力于为前端人员提供全面可靠的专业知识",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '指南', link: '/src/guide/why', activeMatch: '/src/guide/' },
        { text: '题库', link: '/src/questions/front-base/1_HTML', activeMatch: '/src/questions/' },
        { text: '训练', link: '/ing.md' }
      ],
      sidebar: {
        '/src/guide/': [
          { text: '初衷', link: '/src/guide/why' },
          { text: '快速开始', link: '/src/guide/getting-started' },
        ],
        '/src/questions/': questionsSidebar
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/syh-micro-build/mb-front-end-interview' }
      ],
      footer: {
        message: '基于 MIT 许可发布',
        copyright: `版权所有 © 2024-${new Date().getFullYear()} ShanYi-Hui`
      },
      docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      outline: {
        label: '页面导航'
      },
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式'
    },
    lastUpdated: true
  })
}

/**
 * 生成特定的 Sidebar
 * @param conf 配置
 * @param sidDir 目录
 * @returns Sidebar
 */
async function genSpecSidebar(conf: Array<{
  dirName: string;
  menuName: string;
  collapsed: boolean;
}>, sidDir: string) {
  const filesInfo = await getSpecificFilesInfo('.md', sidDir);
  const allSidebarItems = filesInfo.map(item => ({
    text: item.name.replace(/^[^_]*_|\.[^.]*$/g, ''),
    link: '/' + sidDir + item.relativePath,
  }))
  const getSidebarItems = (dir: string) => allSidebarItems.filter(item => item.link.match(dir))
  return conf.map(item => ({
    text: item.menuName,
    collapsed: item.collapsed,
    items: getSidebarItems(item.dirName)
  }))
}