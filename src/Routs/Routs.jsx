
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Mycart from '../Pages/mycart/Mycart';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Sheard/ErrorPage';
import BrandDetails from '../Pages/Home/Brand-info/BrandDetails';

const router = createBrowserRouter([
      {
            path:'/',
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>,
                        loader: ()=> fetch('/data.json')
                        
                  },
                  {
                        path:'/branddetails/:id',
                        element:<BrandDetails></BrandDetails>
                  },
                  {
                        path:'/addproduct',
                        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                  },
                  {
                        path:'/mycart',
                        element:<Mycart></Mycart>
                  },
                  {
                        path:'/login',
                        element:<Login></Login>
                  },
                  {
                        path:'/register',
                        element:<Register></Register>
                  },
            ]
      }
])

export default router;