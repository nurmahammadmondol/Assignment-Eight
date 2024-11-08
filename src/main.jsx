import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Outlet/Statistics/Statistics';
import Dashboard from './Components/Outlet/Dashboard/Dashboard';
import ViewDetails from './Components/Outlet/FetchData/ViewDetails';
import Error from './Components/Home/Error';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Components/Outlet/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    loader: () => fetch('/ProductData.json'),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('/ProductData.json'),
        element: <Home></Home>,
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/Dashboard',
        loader: () => fetch('/ProductData.json'),
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/ViewDetails/:Details',
        loader: () => fetch('/ProductData.json'),
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: '/About',
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
