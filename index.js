module.exports = async function(file, params = {}) {
  const tests = require(`../tests/${file}.test.js`)
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
