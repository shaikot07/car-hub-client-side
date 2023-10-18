import React from 'react';
import { Link } from 'react-router-dom';

const BrandCart = ({ cdata }) => {
      console.log(cdata);
      const { id, brand_name, image } = cdata
      return (
            <Link to={`/branddetails/${brand_name}`}>
                  <div>
                        <div className='w-[300px]  bg-slate-300 rounded-lg mb-2'>
                              <img className='rounded-lg w-full h-[150px]' src={image} alt="" />
                              <div>
                                    <h2 className='text-3xl text-center font-bold pb-2'>{brand_name}</h2>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

export default BrandCart;