import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
          {
              index: true,
              element: <Home />,
          },
          {
              path: '/About',
              element: <About />,
          },
          {
              path: '/Blog',
              element: <Blog />,
          },
          {
              path: '/Contact',
              element: <Contact />,
          },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);