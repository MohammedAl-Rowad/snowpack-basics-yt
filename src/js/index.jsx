import '../scss/index.scss'
import { myFunc } from './utils/funcs'
import { isEmpty } from 'lodash'

import $ from 'jquery'

console.log({ $ })

myFunc()

setTimeout(async () => {
  const React = await import('react')
  const ReactDOM = await import('react-dom')
  const { default: MyComponent } = await import('./reactComponents/MyComponent')
  ReactDOM.render(
    <React.StrictMode>
      <MyComponent />
    </React.StrictMode>,
    document.getElementById('my-section')
  )
}, 3000)

$('#my-button').on('click', async () => {
  const { onClick } = await import('./utils/utils.js')
  onClick()
})
