import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import TrandingBooks from './pages/TrandingBooks.jsx'
import NewReleasedBook from './pages/NewReleasedBook.jsx'
import UpcomingBooks from './pages/UpcomingBooks.jsx'
import FavouriteBooks from './pages/FavouriteBooks.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/trending-books',
        element: <TrandingBooks/>
      },
      {
        path: '/new-releases',
        element: <NewReleasedBook/>
      },
      {
        path: '/upcoming-books',
        element: <UpcomingBooks/>
      },
      {
        path: '/favourite-books',
        element: <FavouriteBooks/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
