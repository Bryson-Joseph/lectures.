import { useState, useEffect } from 'react'

function App() {
  const [counter, setValue] = useState(0)
  const [keyword] = useState('')
  const onClick = () => setValue((prev) => prev + 1)
  console.log('i run all the time')
  console.log('i run only once.')
  useEffect(() => {
    console.log('CALL THE API..')
  }, [])
  return (
    <div>
      <input type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App
