import 'https://unpkg.com/react@17/umd/react.development.js'
import 'https://unpkg.com/react-dom@17/umd/react-dom.development.js'
import 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js'
import { mapData } from './src/js/funcs.js'

const App = () => {
  const [state, setState] = React.useState('a react component')
  return (
    <React.Fragment>
      <h1>{state}</h1>
      <button onClick={() => setState('new Title')}>Change title</button>
    </React.Fragment>
  )
}
ReactDOM.render(<App />, document.getElementById('myapp'))

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 })

mapData()
