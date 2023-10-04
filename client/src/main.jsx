import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Login from './components/LoginAndSignup/index.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render([
  {
    path: "/",
    element:<App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true, 
        element: <Home/>
      },
      {
        path: '/loginAndSignup',
        element: <Login/>
      },
      {
        path: '/profile/:profileId',
        element: <Profile/>
      }
    ]
  }
]
)
