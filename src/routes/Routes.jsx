import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Ideas from '../pages/Ideas';
import MyIdeas from '../pages/MyIdeas';
import AddIdea from '../pages/AddIdea';
import MyInteractions from '../pages/MyInteractions'; 
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ideas", element: <Ideas /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { 
        path: "/my-ideas", 
        element: <PrivateRoute><MyIdeas /></PrivateRoute> 
      },
      { 
        path: "/add-idea", 
        element: <PrivateRoute><AddIdea /></PrivateRoute> 
      },
      { 
        path: "/my-interactions", 
        element: <PrivateRoute><MyInteractions /></PrivateRoute>  
      },
    ],
  },
]);

export default router;