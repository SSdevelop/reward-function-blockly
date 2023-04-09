import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './error'
import Tutorial1Page from './pages/Tutorial1'
import FreePlay from './pages/FreePlay'
import Tutorial2Page from './pages/Tutorial2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/tutorial1',
    element: <Tutorial1Page />,
    errorElement: <Error />
  },
  {
    path: '/tutorial2',
    element: <Tutorial2Page />,
    errorElement: <Error />
  },
  {
    path: '/tutorial3',
    element: <FreePlay />,
    errorElement: <Error />
  }
], { basename: '/tutorial' });

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);