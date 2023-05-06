import {useState} from 'react'

// custom hook
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(currentCount => currentCount + 1);

  return [count, increment];
}

export const Counter = () => {
  const [count, increment] = useCounter();
  
  return <button onClick={increment}>{count}</button>
}
