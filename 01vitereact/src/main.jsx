import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return(
    <div>
      <h1>Custom App ! </h1>
    </div>
  )
}

// const RRReactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )
 const anotherUser = "chai0rcode"

const reactElement = React.createElement( //bable(tranpiler) will inject this element in   this  
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser //evaluated expression like variabel
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <MyApp />
        // <App />

    // MyApp()
    // anotherElement
    // THIS ONE IS IMPORTANT AS IT IS CLEARLY SIGNIFIES WHAT SYNTAX A REACT RENDER METHOD  WANT
    // reactElement 
    // <RRReactElement/> this will don't work so, don't uncomment it bcoz of diff. syntax
  // </StrictMode>,
)
