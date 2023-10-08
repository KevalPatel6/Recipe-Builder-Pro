import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import MyRecipes from './pages/MyRecipes.jsx'
import CreateNewRecipe from './pages/CreateNewRecipe/CreateNewRecipe.jsx'
import AllRecipes from './pages/AllRecipes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/recipes',
        element: <AllRecipes />
      },
      {
        path: '/loginAndSignup',
        element: <Login />
      },
      {
        path: '/me',
        element: <Profile />
      },
      {
        path: '/me/myrecipes',
        element: <MyRecipes />
      },
      {
        path: '/me/createnewrecipe',
        element: <CreateNewRecipe />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
