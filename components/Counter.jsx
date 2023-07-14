import {useState} from 'react'

export default function Counter({startCount}) {
  const [count, setCount] = useState(startCount)  
  function increment(){
    setCount(count + 1)
  }
  function decrement()
  {
    setCount(count - 1)
  }
//   console.log("rendered")
  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}
