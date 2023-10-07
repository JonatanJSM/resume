import { useState } from 'react'
import Navbar from './components/Navbar'
import Descriptioncard from './components/Descriptioncard'
import Projects from './components/Projects'
import Schools from './components/Schools'
import './App.css'
import Jobs from './components/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-full">
			  <Navbar />
        <Descriptioncard />
        <Projects />
        <Jobs />
        <Schools />
		  </div>
    </>
  )
}

export default App
