import { useState } from 'react'
import logo from '/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='header'>Lucas7x's Portfolio</h1>
        <a href="https://lucas7x.win" target="_blank">
          <img src={logo} className="logo" alt="lucas7x logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
