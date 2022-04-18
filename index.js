const path = require('path')

module.exports = async function(name, params = {}) {
  const file = path.join(process.cwd(), 'spec', 'tests', `${name}.test.js`)
  const tests = require(file)
  for (const test in tests) {
    try {
      await tests[test](params)
    } catch (e) {
      console.log(`\n* it['${test}'] in '${name}' failed:\n`)
      console.log(e.message)
      console.log()
      return
    }
  }
}
