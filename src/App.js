
import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Profile from './Profile'
import Route from './Route/Route'
import Skill from './Skill'
export default function App() {
    const router=createBrowserRouter([
        {path:"/",element:<Route/>,children:[
            {path:"/",element:<Profile/>},
           
            {path:"/skills",element:<Skill/>}
        ]}
    ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
