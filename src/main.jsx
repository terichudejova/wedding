import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Place from './pages/Place.jsx'
import QandA from './pages/QandA.jsx'

const router = createBrowserRouter([
  {
    path: "/wedding/",
    element: <App />,
    children: [
      {
        path: "/wedding/",
        element: <Home />
      },
      {
        path: "/wedding/contact",
        element: <Contact />
      },
      {
        path: "/wedding/place",
        element: <Place />
      },
      {
        path: "/wedding/qanda",
        element: <QandA />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
