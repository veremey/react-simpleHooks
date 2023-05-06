import {useState} from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(currentCount => currentCount + 1)
  return <button onClick={increment}>{count}</button>
}
