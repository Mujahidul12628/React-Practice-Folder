import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/components/About/About';
import Blog from './assets/components/Blog/Blog';
import Contact from './assets/components/Contact/Contact';
import ErrorPage from './assets/components/Error/ErrorPage';
import Header from './assets/components/Header/Header';
import Home from './assets/components/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/blog",
//     element: <Blog></Blog>
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
//   {

//   }

// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Header></Header>
    {/* <App /> */}
  </React.StrictMode>,
)
