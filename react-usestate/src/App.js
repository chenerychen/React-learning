import React, {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'

function App() {
  const [number, setNumber] = useState(0)
  const [color, setColor] = useState('')

  function decrement() {
    setNumber(prevNum => prevNum - 1)
  }

  function increment() {
    setNumber(prevNum => prevNum + 1)
  }

  function colorDisplay() {
    setColor(prevColor => prevColor = randomcolor())
  }

  useEffect(() => {
    setColor(randomcolor())
  }, [number])

  return (
    <div> 
      <button onClick={decrement}> - </button> 
      <span style={{color: color}} > {number} {color} </span> 
      <button onClick={increment}> + </button>
    </div>
  );
}

export default App;
