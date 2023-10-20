
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
import JustDetails from '../Pages/Home/JustDetails';
import UpdateProduct from '../Pages/updateProduct/UpdateProduct';

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
                        path:'/details/:id',
                        element:<PrivateRoute><JustDetails></JustDetails></PrivateRoute>,
                  },
                  {
                        path:'/updateproduct/:id',
                        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                        loader:({params})=> fetch(`https://assignment-10-backend-side-15nojv0iz-shaikats-projects.vercel.app/product/${params.id}`)
                  },
                  {
                        path:'/addproduct',
                        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                  },
                  {
                        path:'/mycart',
                        element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
                        loader:()=> fetch('https://assignment-10-backend-side-15nojv0iz-shaikats-projects.vercel.app/cart')
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