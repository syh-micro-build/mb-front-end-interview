<script>
import { h, ref, nextTick } from 'vue'
import { typeDistribution } from '../../../utils/parseQuestions'
export default {
  name: 'markdownDialog',
  props: { level: { type: String, default: '' } },
  emits: ['close', 'submit', 'update:modelValue'],
  setup(props, { emit }) {
    const option = JSON.parse(window.sessionStorage.getItem(props.level))
    const visible = ref(true)
    const actions = ref(Object.entries(typeDistribution).map(([label, value]) => ({ label, value: Object.entries(value).map(([item, itemValue]) => ({ item, value: itemValue,})),})))
    const options = option ?? actions.value?.filter(node => node.label === props.level)?.[0].value
    const hotNum = ref(0)
    let nodeDoc = null
    nextTick(() => {
      nodeDoc = document.getElementById('target-dialog')
    })
    const clickListener = () => {
      document.addEventListener('click', (event) => {
        if (!nodeDoc?.contains(event.target)) handleClose()
      })
    }
    const handleDisplayed = () => {
      handleClose()
    }
    const handleClose = (e) => {
      e?.stopPropagation()
      visible.value = false
      emit('close', false)
    }
    const handleSubmit = () => {
      const result = options.reduce((acc, { item, value }) => {
        acc[item] = value
        return acc
      }, {})
      window.sessionStorage.setItem(props.level, JSON.stringify(options))
      emit('submit', result)
      visible.value = false
    }

    const onRangeChange = ({ target }, node) => {
      const value = Number(target.value) ?? 0
      node.value = value
    }
    const onHotChange = ({ target }) => {
      const value = Number(target.value) ?? 0
      hotNum.value = value
    }
    const optionRender = () => {
      // const itmes = actions.value?.filter(node => node.label === props.level)?.[0].value
      const dom = options.map(el => {
        return h('div', { class: 'md-body_inner' }, [
          h('span', { class: 'tips', 'onUpdate:modelValue': (value) => { } }, el.value * 10),
          h('input', { class: 'inner-input', type: 'range', min: 0, max: 1, step: 0.1, value: el.value, onchange: (v) => onRangeChange(v, el) }),
          h('span', el.item)
        ])
      })
      return dom
    }
    const hotStatistics = () => {
      return h('div', { class: 'md-body_inner' }, [
        h('span', { class: 'tips' }, hotNum.value * 10 ),
        h('input', { class: 'inner-input', type: 'range', min: 0, max: 1, step: 0.1, value: hotNum.value, onchange: (v) => onHotChange(v)}),
        h('span', '热门')
      ])
    }
    const handleRender = () => {
      return h('div', { class: 'md-overlay' }, [
        h('div', { class: 'md-overlay_dialog' }, [
          h('div', { class: 'md-dialog', id: 'target-dialog' }, [
            h('header', { class: 'md-dialog_header' }, [
              h('h5', { class: 'md-dialog_title' }, '客制化试题'),
              h('button', { class: 'md-dialog_close', onClick: (e) => handleClose(e) }, '✖️')
            ]),
            h('div', { class: 'md-dialog_body' }, [h('div', { class: 'body-level' }, [...optionRender(), hotStatistics()])]),
            h('footer', { class: 'md-dialog_footer' }, [
              // h('button', { class: 'md-footer_displayed', onClick: () => handleDisplayed() }, h('span', '不再提示')),
              h('button', { class: 'md-footer_close', onClick: () => handleClose() }, h('span', '取消')),
              h('button', { class: 'md-footer_submit', onClick: () => handleSubmit() }, '确定')
            ])
          ])
        ])
      ])
    }
    clickListener()
    return () => {
      return visible.value ? handleRender() : void 0
    }
  }
}
</script>

<style>
.md-overlay { z-index: 100; position: fixed; top: 0; right: 0; left: 0; height: 100%; background-color: rgba(0, 0, 0, .5); overflow: auto; }
.md-overlay .md-overlay_dialog { position: fixed; top: 0; right: 0; bottom: 0; left: 0; overflow: auto; }
.md-overlay .md-overlay_dialog .md-dialog { position: relative; overflow-wrap: break-word; width: 30%; height: 32%; margin: 15vh auto 50px; border-radius: 5px; background-color: var(--vp-c-bg); padding: 10px; min-height: 300px;}
.md-overlay .md-overlay_dialog .md-dialog .md-dialog_header { padding-bottom: 15px; }
.md-overlay .md-overlay_dialog .md-dialog .md-dialog_header .md-dialog_close { position: absolute; z-index: 100; right: 5px; font-size: 24px; top: 5px; }
.md-overlay .md-overlay_dialog .md-dialog_body .body-level { display: flex; padding-bottom: 18px;}
.md-overlay_dialog .md-dialog_body .md-body_inner { display: flex; flex-direction: column; align-items: center; flex: 1;}
.md-overlay .md-dialog_body .md-body_inner .inner-input{ -webkit-appearance: slider-vertical; writing-mode: bt-lr; width: 10px; }
.md-overlay .md-dialog_body .md-body_inner .tips { color: var(--vp-c-yellow-3); }
.md-dialog .md-dialog_footer { display: flex; justify-content: flex-end; }
.md-dialog .md-dialog_footer .md-footer_displayed {
  padding: 8px 15px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--vp-c-border);
}
.md-dialog .md-dialog_footer .md-footer_close {
  padding: 8px 15px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--vp-c-border);
  margin-left: 12px;
}
.md-dialog .md-dialog_footer .md-footer_submit {
  padding: 8px 15px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #409eff;
  margin-left: 12px;
  color: var(--vp-c-bg-alt);
}
.md-dialog_footer .md-footer_submit:hover {
  background-color: rgba(121.3, 187.1, 255);
  outline: none;
}
</style>