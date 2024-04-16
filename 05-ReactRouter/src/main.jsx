import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/Aboutus/AboutUs.jsx'
import ContactUS from './components/ContactUs/ContactUS.jsx'
import MyInfo from './components/MyInfo/MyInfo.jsx'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<ContactUS/>
      },
      {
        path:"/myInfo/:id",
        element:<MyInfo/>
      }
    ]
  }
])
 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={appRouter} />


   
  </React.StrictMode>,
)
