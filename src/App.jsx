import "./Style/App.scss"
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import  "./Style/home.scss"
import  "./Style/contact.scss"
import Contact from "./Components/Contact"

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Home/>

        },
        {
          path:'/contact',
          element:<Contact/>
        },
        
        
      ]
    }
  ])


  return (
    <RouterProvider router={router}/>
    )
      
  
}

export default App
