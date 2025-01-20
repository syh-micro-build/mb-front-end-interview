---
level:  架构
---
<script setup>
import { getQuestions, selectQuestionsForLevel } from '../../../utils/parseQuestions.js'
import componentMarkdown from '../components/componentMarkdown.vue'

let questions = []
const questionInit = () => {
  const list = getQuestions()
  questions = selectQuestionsForLevel(list, '架构')
}
questionInit()
</script>
<componentMarkdown v-once :data="questions" />
