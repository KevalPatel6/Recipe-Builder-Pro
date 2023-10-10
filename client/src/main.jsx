import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import AllRecipes from './pages/AllRecipes.jsx'
import EnterIngredient from './pages/LookForRecipe/EnterIngredients.jsx'
import MyRecipes from './pages/MyRecipes.jsx'
import CreateNewRecipe from './pages/CreateNewRecipe/CreateNewRecipe.jsx'
import ViewRecipe from './pages/ViewRecipe.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
      },
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
      {
        path: '/enteringredients',
        element: <EnterIngredient/>
      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
