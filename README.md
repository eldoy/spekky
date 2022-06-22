# Spekky

Nano size test runner. Zero dependencies.

The tests use `assert` and stops when a test fails. There is no output if all tests pass.

### Install
```
npm i spekky
```

### Usage

Create a directory called `spec` in your project's root folder.

Add your tests in `spec/tests`, for example call it `spec/tests/http.test.js`. Then add this in `spec/index.js`:

```js
const test = require('spekky')

async function run() {
  // ... start a server or do some setup

  // Start timer
  console.time('Test run')

  // Test the file 'spec/tests/http.test.js
  await test('http')

  // End timer
  console.timeEnd('Test run')
}
run()
```

The test in `spec/tests/http.test.js` looks like this:
```js
const assert = require('assert')
const request = require('spett')

const it = {}

it['should do some stuff'] = async function() {
  const { data, code } = await request({ path: '/hello'})
  assert.deepEqual(code, 200)
  assert.deepEqual(data.hello, 'world')
}

module.exports = it
```

ISC Licensed. Enjoy!
