import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCardDetails from './MyCardDetails';

const Mycart = () => {
      const loadedProduct = useLoaderData()
      console.log(loadedProduct);
      return (
            <div className='max-w-6xl mx-auto'>
                  my card
                  <div className='sm:grid grid-cols-1 md:grid-cols-3'>
                        {
                              loadedProduct.map(product => <MyCardDetails key={product._id} product={product}></MyCardDetails>)
                        }
                  </div>
            </div>
      );
};

export default Mycart;