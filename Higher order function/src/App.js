import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />

    </div>
  );
}

function HOCRed(props) {
  return <h2 style={{ backgroundColor: 'red', width: 100 }}>red<props.cmp /></h2>
}
function HOCGreen(props) {
  return <h2 style={{ backgroundColor: 'green', width: 100 }}>green<props.cmp /></h2>
}

function HOCBlue(props) {
  return <h2 style={{ backgroundColor: 'blue', width: 100 }}>blue<props.cmp /></h2>
}

const Counter = () => {
  const [count, setCount] = useState(0)
  return <>
    <h1>{count}</h1>
    <button type="button" onClick={() => setCount(count + 1)}>click here</button>
  </>
}

export default App;
