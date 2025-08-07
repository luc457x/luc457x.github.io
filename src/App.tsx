import { useState } from 'react'
import './reset.css'
import './variables.css'
import './App.css'
import Card from './Card.tsx'
import Portfolio from './Portfolio.tsx'

function App() {
  const [state, setState] = useState(false)

  return (
    <>
      <header>
        {state == false && (
          <a href="#" onClick={() => setState(true)} >Portfolio</a>
        )}
        {state == true && (
          <a href="#" onClick={() => setState(false)} >Home</a>
        )}
        <a href="https://www.linkedin.com/in/lucas-de-paula-teixeira-24148a177/" target="_blank">LinkedIn</a>
        <a href="https://linktr.ee/lucas7x" target="_blank">Linktree</a>
      </header>
      <main>
        {state == false && (
          <Card />
        )}
        {state == true && (
          <Portfolio />
        )}
      </main>
      <footer>
        <div>
          &copy; 2024 : <a href="https://lucas7x.win" target="_blank">Luc45</a>
        </div>
      </footer>
    </>
  )
}

export default App
