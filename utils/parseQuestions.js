import * as cheerio from 'cheerio'
import ExcelJS from 'exceljs'
import FileSaver from 'file-saver'
import { data } from './getQuestions.data.js'


let questionsData = null
export const typeDistribution = {
  W1: { 基础: 0.4, 编程: 0.3, 业务: 0.2, 架构: 0.1, 管理: 0.0, 拓展: 0.0 },
  W2: { 基础: 0.2, 编程: 0.5, 业务: 0.2, 架构: 0.1, 管理: 0.0, 拓展: 0.0 },
  W3: { 基础: 0.1, 编程: 0.2, 业务: 0.5, 架构: 0.1, 管理: 0.0, 拓展: 0.1 },
  W4: { 基础: 0.1, 编程: 0.1, 业务: 0.1, 架构: 0.5, 管理: 0.1, 拓展: 0.1 },
  W5: { 基础: 0.1, 编程: 0.1, 业务: 0.1, 架构: 0.3, 管理: 0.2, 拓展: 0.2 },
  W6: { 基础: 0.1, 编程: 0.1, 业务: 0.1, 架构: 0.3, 管理: 0.2, 拓展: 0.2 },
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
      } else if (ele.text.startsWith('级别：')) {
        currentBlock.level = ele.text.replace(/^级别：/, "")
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

const shuffleArray = (array) => {
  const times = 10
  for (let t = 0; t < times; t++) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomFactor = Math.floor(Math.random() * (i + 1) * (Date.now() % 1000))
      const j = randomFactor % (i + 1);
      [array[i], array[j]] = [array[j], array[i]]
    }
  }
}


export const selectQuestionsForLevel = (data, level, dist) => {
  const distribution = dist ?? (typeDistribution[level] || typeDistribution['W1'])
  shuffleArray(data)
  const filterLevel = data.filter(node => {
    if (node.level?.includes(level)) return node
  })
  const groupedByType = filterLevel.reduce((acc, question) => {
    if (!acc[question.type]) acc[question.type] = []
    acc[question.type].push(question)
    return acc
  }, {})

  const selectedQuestions = []
  let totalScore = 0


  const numQuestions = 100
  const questionsByType = {}
  for (const type in distribution) {
    const proportion = distribution[type]
    const numForType = Math.ceil(proportion * numQuestions)
    questionsByType[type] = { num: numForType, selected: [] }
  }

  const sortedArr = Object.entries(questionsByType).sort((a, b) => b[1].num - a[1].num)
  const sortedObj = Object.fromEntries(sortedArr)

  for (const type in sortedObj) {
    const questions = groupedByType[type] || []
    const numToSelect = sortedObj[type].num
    let selectedForType = 0
    while ((selectedForType < numToSelect) && questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length)
      const selectedQuestion = questions.splice(randomIndex, 1)[0]
      if (selectedForType <= numToSelect) {
        selectedQuestions.push(selectedQuestion)
        totalScore += selectedQuestion.score
        selectedForType += selectedQuestion.score
      }
      if (selectedForType >= numToSelect) {
        break
      }
    }
  }

  while (totalScore < numQuestions) {
    const remainingQuestions = data.filter(q => !selectedQuestions.includes(q))
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length)
    const randomQuestion = remainingQuestions[randomIndex]
    if (totalScore + randomQuestion.score <= numQuestions) {
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

export const exportExcel = (data, scoringNum) => {
  const _workbook = new ExcelJS.Workbook()
  const _sheet1 = _workbook.addWorksheet('sheet1')
  const _titleCell = _sheet1.getRow(1)
  _titleCell.font = { name: '黑体', bold: true, size: 14, color: { argb: '0000000' }}
  _sheet1.columns = [{ header: '题目', key: 'title', width: 60 }, { header: '类别', key: 'type', width: 10 }, { header: '级别', key: 'level', width: 40 },  { header: '参考答案', key: 'text', width: 60 }, { header: '得分', key: 'scoring', width: 10 }]
  _sheet1.getColumn('A').alignment = { wrapText: true }
  _sheet1.getColumn('D').hidden = true
  _sheet1.addRows(data)
  _sheet1.addRow({ title: '总分', scoring: scoringNum })
  const _totalCell = _sheet1.getRow((data.length + 2))
  _totalCell.font = { name: '黑体', bold: true, size: 14, color: { argb: 'f66f81ff' }}
  _workbook.xlsx.writeBuffer().then(buffer => {
    let _file = new Blob([buffer], { type: 'application/octet-stream' })
    FileSaver.saveAs(_file, '训练结果.xlsx')
  })
}
