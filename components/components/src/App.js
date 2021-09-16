//TODO react pure function --> class component

import React,{useState,useMemo} from 'react';
class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  render() {

    console.log('pure component')
    return (
      <div>
        <h1>pure components {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>click here</button>
      </div>
    )
  }
}

export default App;


//TODO react usememo  --> functional components
export function Memo() {
const [Count,setCount]=useState(0)
const [item,setItem]=useState(10)

//TODO IT WILL CALL WE ANY STATE CHANGE
function multicount(){
console.log("multi")
return Count*5
}

//TODO MEMO IS ONLY CALLED AND RERENDER WHEN COUNT IS CALLED
const multicmemo=useMemo(function multicount(){
console.log("multicmemo")
return Count*5

},[Count])

  return (
    <div>
      <h1>memo components </h1>
      <h2>count:{Count} </h2>
      <h2>item:{item} </h2>
      <h2>{multicount()} </h2>
      <h2>{multicmemo}</h2>
      <button onClick={() => setCount(Count +1 )}>plus</button>
      <button onClick={() => setItem(item*10 )}>multiply 10</button>
    </div>
  )
}