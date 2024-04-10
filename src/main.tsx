import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Inicio from './pages/InicioPage';
import Contatos from './pages/ContatosPage';
import Experiencia from './pages/ExpericenciaPage';
import Sobre from './pages/SobrePage';
import Projetos from './pages/ProjetosPage';


import{
  createBrowserRouter,RouterProvider
}from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Inicio/>
      },
      {
        path:"experiencia",
        element:<Experiencia/>
      },
      {
        path:"contatos",
        element:<Contatos/>
      },
      {
        path:"projetos",
        element:<Projetos/>
      },
      {
        path:"sobre",
        element:<Sobre/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
