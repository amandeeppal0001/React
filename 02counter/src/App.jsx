import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter += 1;
    if(counter<20){
        //  setCounter(counter+1) ONLY INCREASE IT ONCE HERE NOT BELOW BECAUSE IT SENDS IT IN BATCHES THROUGH FIBRE & SEES THAT THIS WORK WILL DONE AGAIN & AGAIN SO IT WILL PERFORM IT ONLY ONCE
        //  setCounter(counter+1)
        //  setCounter(counter+1)
        //  setCounter(counter+1) this will not increase counter value IT WILL ONLY INCREASES IT ONCE
        //  setCounter(counter+1)
         setCounter((prevCounter)=> prevCounter+1) //  IF YOU WANT TO DO AGAIN & AGAIN
         setCounter((prevCounter)=> prevCounter+1)
         setCounter((prevCounter)=> prevCounter+1)
         setCounter((prevCounter)=> prevCounter+1)
         
        console.log("value added", ++counter)
    }
  }

  const removeValue= () =>{
    if(counter>0){
       setCounter(counter-1)
        console.log("value removed", --counter)

    }
  }
  return (
    <>
   <h1>chai aur react</h1>
   <h2>Counter value: {counter}</h2>
   <button
   onClick={addValue}>Add value{counter}</button>
   <br />
   <button onClick={removeValue}>remove value{counter}</button>
   <p>footer: {counter}</p>
    </>
  )
}

export default App
