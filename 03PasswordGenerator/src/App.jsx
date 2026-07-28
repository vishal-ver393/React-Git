import { useState,useCallback,useEffect,useRef } from 'react'

// import './App.css'

function App() {
  const [length,setLength]=useState(8) //default generated password length is 8 
  const [useNum,setUseNum]=useState(false)
  const [useSymbol,setUseSymbol]=useState(false)
  const [password,setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  //implementing useRef-HOOK
  const passwordRef=useRef(null) 

  //password-generating-function
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(useNum) str+="1234567890"
    if(useSymbol) str+="`~!@#$%^&*()_+-=[]{};;',.<>/?"
    for (let i = 0; i < length; i++) {
      pass+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)
  } , [length,useNum,useSymbol,setPassword]) // (function,[dependencies])

  //copy to clipboard feature
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  //function for pop-up
  function handleClick() {
    // Your copy logic
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 500); // 2 seconds
  }

  //implementing useEffecct-HOOK
  useEffect(()=>{
    passwordGenerator()
  },[length,useNum,useSymbol,passwordGenerator])

  return (
    <>
    <br />
    <div className='w-full max-w-md mx-auto p-3 shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-4xl text-center mt-5 text-white my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full px-3 py-1 bg-amber-50' ref={passwordRef} placeholder='Password' readOnly/>
        <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 outline-none text-white font-medium transition-colors duration-100 ease-in-out active:scale-95 transform p-3 " onClick={()=>{copyPasswordToClipboard();handleClick();}}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/> <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={useNum} id='numberInput' onChange={()=>{setUseNum((prev)=>!prev)}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={useSymbol} id='symbolInput' onChange={()=>{setUseSymbol((prev)=>!prev)}} />
          <label htmlFor="numberInput">Symbols</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
