import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import MyRecipes from './pages/MyRecipes.jsx'
import CreateRecipe from './components/MyRecipes/CreatedRecipes.jsx'
import AllRecipes from './pages/AllRecipes.jsx'
import ViewRecipe from './pages/ViewRecipe.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import CreateRecipe from './components/MyRecipes/CreateRecipe.jsx'
import Ingredients from './pages/LookForRecipe/Ingredients.jsx'
import ChooseMeal from './pages/LookForRecipe/ChooseMeal.jsx'
import SeeMeals from './components/Choose-Meal/Meals.jsx'
import SeeDesserts from './components/Choose-Meal/Desserts.jsx'
import SeeDrinks from './components/Choose-Meal/Drinks.jsx'
// import {createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
import Recipe from './components/Choose-Meal/Recipe.jsx'

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
        path: '/recipe/:recipeId',
        element: <ViewRecipe/>
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
      // {
      //   path: '/profile/:profileId/createrecipe',
      //   element: <CreateRecipe />
      // },
      {
        path: '/ingredients',
        element: <Ingredients />
      },
      {
        path: '/Choose-Meal',
        element: <ChooseMeal />
      },
      {
        path: '/meals',
        element: <SeeMeals />
      },
      {
        path: '/desserts',
        element: <SeeDesserts />
      },
      {
        path: '/drinks',
        element: <SeeDrinks />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
