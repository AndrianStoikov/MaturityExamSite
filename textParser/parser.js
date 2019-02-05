const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, 'text.txt'), 'utf8', (err, contents) => {

  let regex = /\n/g

  let regexForSemiCol = /"/g

  let regexReplaceTab = /\t/g

  let splitedText = contents.replace(regex, '\\n')

  splitedText = splitedText.replace(regexForSemiCol, "“")

  splitedText = splitedText.replace(regexReplaceTab, "  ",)

  console.log(splitedText)

  fs.writeFile(path.resolve(__dirname, 'result.txt'), splitedText, 'utf8', (err) => {

  })
})
