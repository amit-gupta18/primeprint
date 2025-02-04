import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(" is the now  and ");

  return (
    <>
    <div className='text-4xl text-blue-600 font-bold'>
      <h1>Prime Print</h1>
    </div>
      <div className='text-xl font-semibold '>A Platform  where within a click u can order for the college stationary and avioid being in the line , saving the time . </div>
    
    </>
  )
}

export default App
