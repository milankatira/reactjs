import './App.css';
import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function App() {
  let user=[
    {name:'milan',id:1},
    {name:'kanak',id:2},
    {name:'sagar',id:3},
    {name:'sunny',id:4},
  ]
  return (
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user.map((item)=>
      <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
      }
      <Route path="/user/:id/:name" ><User /></Route>
      </Router>
    </div>
  );
}
export default App;
