import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Contact from './Components/Contact/Contact.jsx'
import PortfolioMain from './Components/Portfolio/PortfolioMain.jsx'
import CategorySelect from './Components/Portfolio/CategorySelect.jsx'
import Wedding from './Components/Portfolio/SubPages/Wedding.jsx'
import Model from './Components/Portfolio/SubPages/Model.jsx'
import Landscape from './Components/Portfolio/SubPages/Landscape.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "portfolio",
    element: <PortfolioMain />,
    children: [
      {
        index: true,
        element: <CategorySelect />
      },
      {
        path: "wedding",
        element: <Wedding />
      },
      {
        path: "model",
        element: <Model />
      },
      {
        path: "landscape",
        element: <Landscape />
      }
    ]
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
