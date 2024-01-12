import "./Style/App.scss"
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Service from "./Components/Service"
import  "./Style/home.scss"
import  "./Style/contact.scss"
import  "./Style/mediaquery.scss"


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
        {
          path:'/service',
          element:<Service/>
        },
        
        
      ]
    }
  ])


  return (
    <RouterProvider router={router}/>
    )
      
  
}

export default App
