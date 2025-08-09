import { useState } from 'react'
import './reset.css'
import './variables.css'
import './App.css'
import Card from './Card.tsx'

function App() {
  const [state, setState] = useState<boolean>(false)
  const [flipped, setFlipped] = useState<boolean>(false);
  const handleState = () => {
    setFlipped(false);
    setTimeout(() => {
      setState(!state);
    }, 600);
  };

  return (
    <>
      <header>
        {state == false && (
          <a href="#" onClick={handleState} >Portfolio</a>
        )}
        {state == true && (
          <a href="#" onClick={handleState} >Home</a>
        )}
        <a href="https://www.linkedin.com/in/lucas-de-paula-teixeira-24148a177/" target="_blank">LinkedIn</a>
        <a href="https://linktr.ee/lucas7x" target="_blank">Linktree</a>
      </header>
      <main>
        <Card
          flipped={flipped}
          state={state}
          setFlipped={setFlipped}
        />
      </main>
      <footer>
        <div>
          &#x1F12F; 2024 : <a href="https://lucas7x.win" target="_blank">Luc45</a>
        </div>
      </footer>
    </>
  )
}

export default App
