import '../scss/index.scss'
import { myFunc } from './utils/funcs'
import { isEmpty } from 'lodash'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

myFunc()

console.log(isEmpty({}))

const MyComponent = () => {
  const [state, setState] = useState()
  return <div>Hello World</div>
}

ReactDOM.render(<MyComponent />, document.getElementById('app01'))
