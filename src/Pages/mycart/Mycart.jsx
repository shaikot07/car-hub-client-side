import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCardDetails from './MyCardDetails';

const Mycart = () => {
      const loadedProduct = useLoaderData()
      // const [products,setProducts]=useState(loadedProduct)
      // console.log(loadedProduct);
      return (
            <div className='max-w-6xl mx-auto'>
                  my card
                  <div className='sm:grid grid-cols-1 md:grid-cols-3'>
                        {
                              loadedProduct.map((product,ind)=> <MyCardDetails key={ind} product={product}
                                    // products={products}
                                    // setProducts={setProducts}
                              
                              ></MyCardDetails>)
                        }
                  </div>
            </div>
      );
};

export default Mycart;