import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Blog from './Pages/Blogs.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'contact',
        element:<Contact />,
      },
      {
        path:'about',
        element:<About />,
      },
      {
        path:'services',
        element:<Services />,
      },
      {
        path:'blogs',
        element:<Blog />,
      },
      {
        path:'/blogs/:id',
        element:<SingleBlog />,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
