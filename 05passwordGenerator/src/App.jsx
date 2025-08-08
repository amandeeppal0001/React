import { useState,useCallback ,useEffect,useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
//ref hook
const passwordRef = useRef(null) //YOU CAN TAKE REFERRENCE OF ELEMENT WHICH IS ON WEBPAGE AND CAN DO MANIPULATION WITH THAT ELEMENT  & ALSO = we used for better user experiance like changing the ui of copy & showing message that password is copied


  const passwordGenerator = useCallback(()=>{   // used for optimization like caching AND WE CAN ALSO COMPLETE THIS PROJECT WITHOUT USECALLBACK BUT IT WILL BE UNOPTIMIZED
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*()_+-=[]{}|;:',.<>/?`~"
    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() *str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword]) // setpassword is used for caching & memory optimization

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,26); //if want to select partial password then provide starting & ending index of str
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {  // used to run component when window loads initially and used to AGAIN when any one of dependencies changes
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])







  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-gray-500 bg-gray-800'>
          <h1 className=' text-center text-white my-3'>Password Generator</h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50">
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly 
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>

    <div className='flex text0sm gap-x-2 text-amber-500'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}} />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev) => !prev)
        }}       
       />
       <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={()=>{
          setCharAllowed((prev) => !prev);
        }}       
       />
       <label htmlFor="numberInput">Characters</label>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
