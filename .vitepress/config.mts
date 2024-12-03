import { defineConfig } from 'vitepress'
import { getSpecificFilesInfo } from '../utils'
import { questionsMenu } from './menu-config.mts';

// https://vitepress.dev/reference/site-config
export default async () => {
  const sidebar = await genSidebar()
  
  return defineConfig({
    title: "前端面试题库",
    description: "致力于为前端人员提供全面可靠的专业知识",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '题库', link: '/' },
        { text: '训练', link: '/ing.md' }
      ],
      sidebar,

      socialLinks: [
        { icon: 'github', link: 'https://github.com/ShanYi-Hui/front-end-interview' }
      ]
    }
  })
}

// ---
async function genSidebar() {
  const filesInfo = await getSpecificFilesInfo('.md', 'src');
  const allSidebarItems = filesInfo.map(item => ({
    text: item.name.replace(/^[^_]*_|\.[^.]*$/g, ''),
    link: '/src' + item.relativePath,
  }))
  const getSidebarItems = (dir: string) => allSidebarItems.filter(item => item.link.match(dir))
  return questionsMenu.map(item => ({
    text: item.menuName,
    collapsed: item.collapsed,
    items: getSidebarItems(item.dirName)
  }))
}