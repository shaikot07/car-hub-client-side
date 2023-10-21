import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import MyCardDetails from './MyCardDetails';

const Mycart = () => {
      // const loadedProduct = useLoaderData()
      const [products,setProducts]=useState([])
      console.log(products);
      const [control,setControl]=useState(true)


      useEffect(()=>{
            fetch('https://assignment-10-backend-side-15nojv0iz-shaikats-projects.vercel.app/cart')
                  .then(res =>res.json())
                  .then(data =>setProducts(data))
      },[control])

      return (
            <div className='max-w-6xl mx-auto'>
                  <h2 className='text-3xl text-pink-700'>Your Cart :</h2>
                  <div className='sm:grid grid-cols-1 md:grid-cols-3'>
                        {
                              products.map((product,ind)=> <MyCardDetails key={ind} product={product}
                                    // products={products}
                                    // setProducts={setProducts}
                                    setControl={setControl}
                                    control={control}
                              
                              ></MyCardDetails>)
                        }
                  </div>
            </div>
      );
};

export default Mycart;