import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-100" style={{backgroundColor : color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-2 py-1.5 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor : "red"}} onClick={() => {setColor("red")}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor : "green"}} onClick={() => {setColor("green")}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor : "blue"}} onClick={() => {setColor("Blue")}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{backgroundColor : "pink"}} onClick={() => {setColor("Pink")}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{backgroundColor : "yellow"}} onClick={() => {setColor("yellow")}}>Yellow</button>
        </div>
      </div>
    </> 
  )
}

export default App
