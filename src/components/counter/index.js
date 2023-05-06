import {useEffect, useState} from 'react'

// custom hook
const useCounter = (initialValue, incrementValue) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(currentCount => currentCount + incrementValue);

  return [count, increment];
}

export const Counter = () => {
  // not optimised. initialValue will be runnig all the time
  //const initialValue = Number(window.localStorage.getItem('count') || 0);
  
  // !!! optimised. initialValue will be runnig once
  const initialValue = () => Number(window.localStorage.getItem('count') || 0);
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(currentCount => currentCount + 1);
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]) 
  
  return <button onClick={increment}>{count}</button>
}
