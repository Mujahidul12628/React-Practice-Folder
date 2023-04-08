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
import Header from './assets/components/Header/Header';
import Home from './assets/components/Home/Home';
import Main from './assets/components/Main/Main';
import First from './assets/components/First/First';
import User from './assets/components/User/User';
import SingleUser from './assets/components/SingleUser/SingleUser';
import UserDetails from './assets/components/UserDetails/UserDetails';

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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: 'blog',
//         element: <Blog></Blog>
//       },
//       {
//         path: 'contact',
//         element: <Contact></Contact>
//       }
//     ]

//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'user',
        element: <User></User>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },

      {
        path: 'singleUser/:userId',
        element: <UserDetails></UserDetails>
      },
      {
        path: 'about',
        element: <About></About>
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
    <RouterProvider router={router}> <Home></Home>  </RouterProvider>
  </React.StrictMode>,
)
