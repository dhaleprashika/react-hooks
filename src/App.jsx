// import React from 'react'
// import { useState } from 'react'


// const App = () => {

//     let [username,setUsername]=useState("prashika")

//     let[count,setCount]=useState(0)

//     let handleChange=()=>{
//         setUsername("aahi")
//     }

//     let handleCountChange=()=>{
//         setCount(1)
//     }


//   return (
//     <>
//     <h1>{username}</h1>
//     <h2>{count}</h2>
//     <button onClick={handleChange}>Change Username</button>
//     <button onClick={handleCountChange}>Change Count</button>
//     </>
//   )
// }

// export default App

//Counter Application using hooks

import React from 'react'
import { useState } from 'react'
import './global.css'

const App = () => {
    let [count,setCount]=useState(0)

    let handleReset=()=>{
        setCount(0)
    }

    let handleIncrement=()=>{
        setCount(count+1)
    }

    let handleDecrement=()=>{
        setCount(count-1)
    }

  return (
    <>
    <div className='mainBlock'>
        <h1>{count}</h1>
    
    <div className='btnBlock'>
        <button id='btn1' onClick={handleIncrement}>Increment</button>
        <button id='btn1' onClick={handleDecrement}>Decrement</button>
        <button id='btn1' onClick={handleReset}>Reset</button>
        </div>
    </div>
    </>
  )
}

export default App