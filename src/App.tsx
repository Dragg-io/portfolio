import { useState } from 'react';
import './app/styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/Home';
import BlogPage from './pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPage />,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
