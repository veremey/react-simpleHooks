import React, { useState } from 'react';

const Upper = React.memo(({children}) => {
  const [count, setCount] = useState(0)
  console.log('rendering', children);

  return (
    <div>
      Uppercase version: {children.toUpperCase()}{' '}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )}
)

export const Formular = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  return (
    <div>
      <label htmlFor="first-name-input">First name</label>
      <input 
        id="first-name-input"
        type='text' 
        onChange={e => setFirstName(e.target.value)}
      />
      <Upper>{firstName}</Upper>
      <hr/>
      <label htmlFor="last-name-input">First name</label>
      <input 
        id="last-name-input"
        type='text' 
        onChange={e => setLastName(e.target.value)}
      />
      <Upper>{lastName}</Upper>
      <hr/>
    </div>
  )

}
