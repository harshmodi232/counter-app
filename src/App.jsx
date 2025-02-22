import React from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='min-h-screen min-w-screen bg-blue-300'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-5xl font-semibold bg-yellow-500 py-2 px-8 rounded-4xl mb-10'>COUNTER</h1>
          <h2 className='my-6 text-6xl font-semibold'>{count}</h2>
          <div>
            <button className='font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full m-4 mt-10' onClick={()=>setCount(count-1)}>-</button>
            <button className='font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full m-4 mt-10' onClick={()=>setCount(0)}>0</button>
            <button className='font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full m-4 mt-10' onClick={()=>setCount(count+1)}>+</button>
          </div>
        </div>
    </div>

  )
}
export default App