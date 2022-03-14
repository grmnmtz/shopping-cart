import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => (
  <div>
    <h1>Hello world!</h1>
  </div>
)

const root = document.querySelector('#root')

ReactDOM.render(<App />, root)
