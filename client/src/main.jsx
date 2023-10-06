import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './components/LoginAndSignup/index.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import AllRecipes from './pages/AllRecipes.jsx'
import EnterIngredient from './pages/LookForRecipe/EnterIngredients.jsx'
import MyRecipes from './pages/MyRecipes.jsx'
import CreateRecipe from './components/MyRecipes/CreateRecipes.jsx'
// import './index.css'./components/MyRecipes/CreateRecipe.jsx
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
        path: '/profile/:profileId',
        element: <Profile />
      },
      {
        path: '/profile/:profileId/myrecipes',
        element: <MyRecipes />
      },
      {
        path: '/profile/:profileId/createrecipe',
        element: <CreateRecipe/>
      },
      {
        path: '/profile/:profileId/enterIngredient',
        element: <EnterIngredient/>
      },
    ]
  }
]
)
