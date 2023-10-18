import React from 'react';
import { ImStarFull } from "react-icons/im";
import { Link } from 'react-router-dom';

const BrandDetailsCard = ({ products }) => {
      const { _id, brandName, image, name, price, rating, shortDescription, type } = products || {}
      return (
            <div>

                  <div className=" flex flex-col text-gray-700 bg-pink-300 border border-red-900 shadow-md w-[360px] rounded-xl bg-clip-border mb-3">
                        <div className=" h-56   overflow-hidden text-white  rounded-xl  bg-clip-border ">
                              <img
                                    src={image}
                                    alt="img-blur-shadow"

                              />
                        </div>
                        <div className="p-6">
                              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Car Name: {name}
                              </h5>
                              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                                    Brand Name: {brandName}
                              </h5>
                              <p className='text-blue-gray-900 font-1xl font-bold'>Type: {type}</p>
                              <p className='text-white font-1xl font-bold'>Price: $ {price}</p>
                              <p className='text-blue-gray-900 font-1xl font-bold '>Rating: {rating} <span className='inline-block'><ImStarFull className='text-yellow-300'></ImStarFull></span> </p>

                        </div>
                        <div className="p-6 pt-0">
                              <Link to={`/details/${_id}`}>
                                    <button
                                          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                          type="button"
                                          data-ripple-light="true"
                                    >
                                          Details button
                                    </button>
                              </Link>
                              <Link>
                                    <button
                                          className="select-none ml-3 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                          type="button"
                                          data-ripple-light="true"
                                    >
                                          Update button
                                    </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default BrandDetailsCard;