import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)  
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
