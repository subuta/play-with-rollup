import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import assert from 'assert'

const { components: componentsUmd } = require('distLib/bundle.umd')
const { components: componentsCjs } = require('distLib/bundle.cjs')

console.log('componentsUmd =', componentsUmd)
console.log('componentsCjs =', componentsCjs)

try {
  // Node.js(NODE_ENV=production) without module bundler cannot load es module directly.
  // But require that by babel-register and esm(NODE_ENV=development) will works fine.
  const { components: componentsEs } = require('distLib/bundle.es')
  console.log('componentsEs =', componentsEs)
} catch (err) {
  assert(err instanceof SyntaxError);
  console.log('componentsEs = SyntaxError:', err.message)
}

const { App } = componentsUmd

console.log('Render loaded react component(via umd)')
console.log(renderToStaticMarkup(<App />))