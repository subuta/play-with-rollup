import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'

import { components as componentsUmd } from 'distLib/bundle.umd'
import { components as componentsCjs } from 'distLib/bundle.cjs'
import { components as componentsEs } from 'distLib/bundle.es'

console.log('componentsUmd =', componentsUmd)
console.log('componentsCjs =', componentsCjs)
console.log('componentsEs =', componentsEs)

const { App } = componentsUmd

const app = (
  <App />
)

console.log('Render loaded react component(via umd)')
ReactDOM.render(app, document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}