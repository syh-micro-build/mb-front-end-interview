---
level:  专家
---

<script setup>
import { getQuestions, selectQuestionsForLevel } from '../../../utils/parseQuestions.js'
import componentMarkdown from '../components/componentMarkdown.vue'

let questions = []
const questionInit = () => {
  const list = getQuestions()
  questions = selectQuestionsForLevel(list, '专家')
}
questionInit()
</script>
<componentMarkdown v-once :data="questions" />
