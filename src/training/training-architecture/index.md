---
level:  架构
---
<script setup>
import { ref, nextTick } from 'vue'
import { getQuestions, selectQuestionsForLevel } from '../../../utils/parseQuestions.js'
import componentMarkdown from '../components/componentMarkdown.vue'
import markdownDialog from '../components/markdownDialog.vue'

const questions = ref([])
const vis = ref(true)
const questionInit = (proportion) => {
  const list = getQuestions()
  questions.value = selectQuestionsForLevel(list, '架构', proportion)
}
const handleSubmit = (v) => {
  vis.value = false
  questionInit(v)
  const time = setTimeout(_ => {
    vis.value = true
    clearTimeout(time)
  })
}
questionInit()
</script>
<markdownDialog level="架构" @submit="handleSubmit"  />
<componentMarkdown v-if="vis" :data="questions" />
