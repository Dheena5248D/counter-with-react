import { useState } from "react";
import "./App.css"
function App() {
  const [count, setCount ] = useState(0);
 const funinc = () =>{
    setCount(count +1)
  }
function fundec(){
setCount(count -1)
}
function funres(){
setCount(0)
}
  return(
    <div>
    <div id="main">
    <div id ="display">
    {count}</div>
    <div id ="buttons">
    <button onClick={funinc}>+</button>
    <button onClick={funres}><span className="reload">&#x21bb;</span></button>
    <button onClick={fundec}>- </button>
   </div></div></div>
  )
  }
export default App;





