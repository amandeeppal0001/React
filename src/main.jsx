import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


 

// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {path: "",
//       element: <Home/>
//     },
//     {
//       path: "about",
//       element: <About/>
//     },
//     {
//       path: "contact",
//       element: <Contact/>
//     }
//   ]
// },
// ])


// Another syntax ,above can also be used just differ by syntax 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}>
      {/* <Route path='amandeep' element={} ></Route> this will nest amandeep inside about route like about/amandeep just provide element */}
      </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
