import { useState } from 'react'
import './App.css'
import AddNotes from './components/AddNotes'
import NotesList from './components/NotesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="border-2 p-2 w-[70%]  mx-auto mb-3">
        <AddNotes/>
      </div>
      <hr/>
      <div className="w-full py-3">
        <NotesList/>
      </div>
    </>
  )
}

export default App
