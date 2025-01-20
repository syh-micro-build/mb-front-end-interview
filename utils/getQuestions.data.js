import fs from 'node:fs'
import { marked, Lexer } from 'marked'

export default {
  watch: ['../src/questions/*/*.md'],
  load(watchedFiles) {
    return watchedFiles.map((file) => {
      const content = fs.readFileSync(file, 'utf8')
      let re = /^# ([\w\u4e00-\u9fa5]+)/m
      // let match = re.exec(content)
      const match = content.match(re)
      re.lastIndex = 0
      if (match) {
        const lexer = new Lexer()
        const inputContent = marked(match.input)
        const ast = lexer.lex(content)
        const count = Object.keys(inputContent).length
        if (count < 100) return void 0
        const doc = { key: match[1], content: inputContent, ast: ast }
        return doc
      }
      return void 0
    }).filter(Boolean)
  }
}