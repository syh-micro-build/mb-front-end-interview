<script>
import { h, watch, ref } from 'vue'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { exportExcel } from '../../../utils/parseQuestions'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/atom-one-light.css'
export default {
  name: 'componentMarkdown',
  props: { data: { type: Array } },
  setup(props) {
    const datas = ref([...props.data])
    const scoringNum = ref(0)
    const newMarked = new Marked()
    hljs.registerLanguage('javascript', javascript)
    const onCalculate = (e, node) => {
      if (Number(e.target.value || 0) > node.score) (e.target.value = node.scoring || '')
      node.scoring = Number(e.target.value || 0)
    }
    const onExportExcel = () => {
      const exportData = datas.value
      if (!scoringNum.value) return confirm('请对训练进行打分后即可导出')
      exportExcel(exportData, scoringNum.value)
    }
    newMarked.use(markedHighlight({
      langPrefix: 'hljs language-',
      gfm: true,
      tables: false,
      breaks: true,
      pedantic: true,
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'javascript'
        return hljs.highlight(code, { language }).value
      }
    }))
    watch(
      () => datas,
      (newV) => {
        let num = 0
        newV.value?.forEach(el => { num = num + (el.scoring || 0) })
        scoringNum.value = num
      },
      { deep: true }
    )
    return () => {
      if (!props.data || !props.data?.length) return h('div', [h('span', '暂无数据')])
      const children = datas.value.map(node => {
        const content = newMarked.parse(node.text)
        return h('div', { class: 'main-box_inner' }, [
          h('div', { class: 'inner-head' }, [
            h('h4', { class: 'head-title' }, node.title),
            h('div', { class: 'head-re' }, [
              h('span', { class: 'head-score' }, `${node.score} 分`),
              h('input', { class: 'head-statistics', type: 'number', step: 1, onInput: (vl) => onCalculate(vl, node) })
            ])
          ]),
          /<details\s+[^>]*>/i.test(content) ? h('div', { class: 'inner-content ', innerHTML: content }) : h('details', { class: 'inner-content ', innerHTML: content }),
        ])
      })
      return h('div', { class: 'main-box', }, [...children, h('div', { class: 'content-scoring' }, [
        h('span', {}, '总得分：'),
        h('span', { class: 'scoring-num' }, scoringNum.value),
        h('button', { class: 'export-excel', onClick: () => onExportExcel()}, '导出到Excel')
      ])])
    }
  }
}
</script>

<style>
  .main-box .main-box_inner { margin-top: 5px; }
  .main-box .main-box_inner .inner-head { display: flex; align-items: center; justify-content: space-between; }
  .main-box_inner .inner-head .head-title { flex: 3; margin: 0; }
  .main-box_inner .inner-head .head-re { flex: 1; display: flex; justify-content: flex-end;}
  .main-box_inner .inner-head .head-statistics { width: 60px; margin-left: 8px; border: 1px solid var(--vp-c-gray-1); border-radius: 5px; padding: 0 8px; }
  .main-box .content-scoring { margin-top: 20px; display: flex; justify-content: flex-end; align-items: center;}
  .main-box .content-scoring .scoring-num { color: var(--vp-c-red-1); padding-right: 15px; }
  .main-box .content-scoring .export-excel { color: var(--vp-c-text-1); padding: 2px 5px; border: 1px solid var(--vp-c-border);  border-radius: 3px; }
</style>