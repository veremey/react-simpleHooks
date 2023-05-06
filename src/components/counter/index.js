import {useState} from 'react'

// custom hook
const useCounter = ({initialValue, incrementValue}) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(currentCount => currentCount + incrementValue);

  return [count, increment];
}

export const Counter = () => {
  const [count, increment] = useCounter({initialValue: 2, incrementValue: 1});
  
  return <button onClick={increment}>{count}</button>
}
