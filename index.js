const path = require('path')

module.exports = async function(name, params = {}) {
  const file = path.join(process.cwd(), 'spec', 'tests', `${name}.test.js`)
  const tests = require(file)
  for (const name in tests) {
    try {
      return await tests[name](params)
    } catch (e) {
      console.log(`\n* it['${name}'] in '${file}' failed:\n`)
      console.log(e.message)
      console.log()
    }
  }
}
