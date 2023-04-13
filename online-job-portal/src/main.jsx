import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home';
import Header from './assets/components/Header/Header';
import AppliedJob from './assets/components/AppliedJob/AppliedJob';
import TopContainer from './assets/components/TopContainer/TopContainer';
import Statistics from './assets/components/Statistics/Statistics';
import Blogs from './assets/components/Blogs/Blogs';
import AvailableJob from './assets/components/AvailableJob/AvailableJob';
import JobDetails from './assets/components/JobDetails/JobDetails';
import Error from './assets/components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/featuredJob.json')
      },
      {
        path: 'job-details/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`/jobDetails.json`)
      },

      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: '/appliedJob/:id',
        element: <AppliedJob></AppliedJob>,
        loader: ({ params }) => fetch(`/jobDetails.json`)
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,

      },
      {
        path: '*',
        element: <Error />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
