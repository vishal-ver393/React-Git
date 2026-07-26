import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0) // use state is a HOOK : const[<varName>,<a fun taht sets the arg. passed into the var>= useState(<default/initial value of variable count>)] 

  function increase(){
    setCount(count+1)
  }
  function decrease(){
    (count>0)?setCount(count-1):setCount(count-0)
  }

  return (
    <>
    <h1>counter is : {count}</h1>
    <br />
    <div><button onClick={increase}>increase ctr</button></div>
    <br />
    <div><button onClick={decrease}>increase ctr</button></div>
    </>
  )
}

export default App
