import * as cheerio from 'cheerio'
import { data } from './getQuestions.data.js'


let questionsData = null
const typeDistribution = {
  初级: { 基础: 0.6, 编程: 0.3, 业务: 0.1, 架构: 0.0, 管理: 0.0, 拓展: 0.0 },
  中级: { 基础: 0.2, 编程: 0.6, 业务: 0.1, 架构: 0.1, 管理: 0.0, 拓展: 0.0 },
  高级: { 基础: 0.1, 编程: 0.2, 业务: 0.5, 架构: 0.1, 管理: 0.0, 拓展: 0.1 },
  架构: { 基础: 0.1, 编程: 0.1, 业务: 0.1, 架构: 0.5, 管理: 0.1, 拓展: 0.1 },
  专家: { 基础: 0.1, 编程: 0.1, 业务: 0.1, 架构: 0.3, 管理: 0.2, 拓展: 0.2 },
}

export const parseQuestions = (htmlContent) => {
  const _cheerio = cheerio.load(htmlContent.content)
  const questions = []
  _cheerio('h1').each((_, h2Element) => {
    const nodes = _cheerio(h2Element)
    const obj = {}
    nodes.nextAll().each((nt, elem) => {
      const node = _cheerio(elem)
      if (node.is('h2')) {
        obj['questionTitle'] = node.text().trim().replace(/^\d+\.\s*/, '')
        return
      }
      if (node.is('h4')) {
        const typeName = node.text().match(/(?<=类型：)\S+/)
        const scoreNum = node.text().match(/解答（(\d+) 分）/)
        if (typeName) obj['type'] = typeName[0]
        if (scoreNum) obj['score'] = parseInt(scoreNum[1], 10)
        return
      }
      if (!node.is('h4') && !node.is('h2')) {
        let noTow = node.nextUntil('h2')
        obj['text'] = noTow.text()
      }
    })
  })
  return questions
}


export const randomSampleQuestions = (questions, targetScore = 100) => {
  const selectedQuestions = []
  let totalScore = 0
  const availableQuestions = [...questions]

  while (totalScore < targetScore && availableQuestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableQuestions.length)
    const selected = availableQuestions[randomIndex]

    if (totalScore + selected.score <= targetScore) {
      selectedQuestions.push(selected)
      totalScore += selected.score
    }

    availableQuestions.splice(randomIndex, 1)
  }

  return selectedQuestions;
}

export const chunkMarkdown = (node) => {
  const ast = node.ast
  const result = []
  let currentBlock = null
  let score = 0
  ast.forEach(ele => {
    if (ele.type === 'heading' && ele.depth === 2) {
      if (currentBlock) result.push({ ...currentBlock, score })
      currentBlock = { title: ele.text, type: '', score: 0, text: '' }
      score = 0
    } else if (ele.type === 'heading' && ele.depth === 4) {
      if (ele.text.startsWith('类型：')) {
        currentBlock.type = ele.text.replace('类型：', '').trim().replace(/^`(.*)`$/, '\$1')
      } else if (ele.text.startsWith('解答（')) {
        const scoreMatch = ele.text.match(/解答\s*（\s*(\d+)\s*分\s*）/i)
        if (scoreMatch) score = parseInt(scoreMatch[1], 10)
      }
    } else if (currentBlock && ele.type !== 'heading') {
      currentBlock.text += ele.raw
    }
  })
  if (currentBlock) result.push({ ...currentBlock, score })
  return result
}

export const selectQuestionsForLevel = (data, level) => {
  const distribution = typeDistribution[level] || typeDistribution['初级']
  const groupedByType = data.reduce((acc, question) => {
    if (!acc[question.type]) acc[question.type] = []
    acc[question.type].push(question)
    return acc
  }, {})
  const selectedQuestions = []
  let totalScore = 0
  while (totalScore < 100) {
    for (const type in distribution) {
      const questionsOfType = groupedByType[type] || []
      const probability = distribution[type]
      const numToSelect = Math.ceil(probability * 100)
      for (let i = 0; i < numToSelect; i++) {
        if (questionsOfType.length === 0) continue
        const randomIndex = Math.floor(Math.random() * questionsOfType.length)
        const selectedQuestion = questionsOfType.splice(randomIndex, 1)[0]
        if (totalScore + selectedQuestion.score <= 100) {
          selectedQuestions.push(selectedQuestion)
          totalScore += selectedQuestion.score
        }
        if (totalScore >= 100) break
      }
      if (totalScore >= 100) break
    }
  }
  while (totalScore < 100) {
    const remainingQuestions = data.filter(q => !selectedQuestions.includes(q))
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length)
    const randomQuestion = remainingQuestions[randomIndex]
    if (totalScore + randomQuestion.score <= 100) {
      selectedQuestions.push(randomQuestion)
      totalScore += randomQuestion.score
    }
  }
  return selectedQuestions
}
export const getQuestions = () => {
  if (questionsData?.length) return questionsData
  questionsData = data.map(node => {
    const questions = chunkMarkdown(node)
    return questions
  }).flat().filter(node => node.text)
  return questionsData
}