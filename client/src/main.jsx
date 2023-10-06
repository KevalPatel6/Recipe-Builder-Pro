import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import MyRecipes from './pages/MyRecipes.jsx'
// import CreateRecipe from './components/MyRecipes/CreateRecipe.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllRecipes from './pages/AllRecipes.jsx'

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
<<<<<<< HEAD
      {
        path: '/profile/:profileId/createrecipe',
        element: <CreateNewRecipe/>
      }
=======
      // {
      //   path: '/me/createrecipe',
      //   element: <CreateRecipe />
      // }
>>>>>>> cc2bca9d0c95528859240b2b5b0f365148f3088a
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
