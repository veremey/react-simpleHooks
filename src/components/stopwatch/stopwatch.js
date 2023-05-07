import { useEffect, useReducer, useRef } from 'react'

const reducer = (currentState, newState) => {
  return {...currentState, ...newState}
  // switch (action.type) {
  //   case 'LAPSE':
  //     return {
  //       ...state, 
  //       lapse: action.now - action.startTime
  //     }
  //   case 'TOGGLE_RUNNING': 
  //     return {
  //       ...state, 
  //       running: !state.running
  //     }
  //   case 'CLEAR': 
  //     return {
  //       ...state, 
  //       running: false, 
  //       lapse: 0 
  //     }
  //   default:
  //     return state;
  // }
}

const Stopwatch = () => {
  const [{running, lapse}, setState] = useReducer(reducer, {
    running: false, 
    lapse: 0
  })
  const intervalRef = useRef(null)

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        setState({ lapse: Date.now() - startTime})
      }, 0)
    }
    setState({running: !running})
  }

  const handleClearClick = () =>{
    clearInterval(intervalRef.current)
    setState({running: false, lapse: 0})
  }

  return (
    <div style={{textAlign: 'center'}}>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {lapse}
        ms
      </label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick} style={buttonStyles}>
        Clear
      </button>
    </div>
  )
}

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

export default Stopwatch
