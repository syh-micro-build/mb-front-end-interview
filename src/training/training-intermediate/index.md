---
level:  中级
---

<script setup>
import { getQuestions, selectQuestionsForLevel } from '../../../utils/parseQuestions.js'
import componentMarkdown from '../components/componentMarkdown.vue'

let questions = []
const questionInit = () => {
  const list = getQuestions()
  questions = selectQuestionsForLevel(list, '中级')
}
questionInit()
</script>
<componentMarkdown v-once :data="questions" />
