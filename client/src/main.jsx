import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './components/LoginAndSignup/index.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import MyRecipes from './pages/MyRecipes.jsx'
import CreateRecipe from './components/MyRecipes/CreateRecipe.jsx'
import Ingredients from './pages/LookForRecipe/Ingredients.jsx'
import ChooseMeal from './pages/LookForRecipe/ChooseMeal.jsx'
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
        path: '/profile/:profileId',
        element: <Profile />
      },
      {
        path: '/profile/:profileId/myrecipes',
        element: <MyRecipes />
      },
      {
        path: '/profile/:profileId/createrecipe',
        element: <CreateRecipe />
      },
      {
        path: '/ingredients',
        element: <Ingredients />
      },
      {
        path: '/Choose-Meal',
        element: <ChooseMeal />

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
