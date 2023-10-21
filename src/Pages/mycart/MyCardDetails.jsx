import React, { useState } from 'react';
import { ImStarFull } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCardDetails = ({ product,setControl,control}) => {
      // console.log(product);
      const { _id, brandName, image, name, price, rating, shortDescription, type } = product || {}
      

      const handleDelete = (_id) => {
            console.log(_id);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {

                        console.log('delete confrm');
                        fetch(`https://assignment-10-backend-side-15nojv0iz-shaikats-projects.vercel.app/cart/${_id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                          )
                                          
                                          // const remaining =products.filter(item =>item._id !== _id);
                                          // // console.log(remaining);
                                          // setProducts(remaining)
                                    }
                                    setControl(!control)
                              }).catch(error => {
                                    console.log(error);
                              })
                  }
            })
      }

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

                              <button
                                    onClick={() => handleDelete(_id)}
                                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                              >
                                    Remove To Cart
                              </button>


                        </div>
                  </div>
            </div>
      );
};

export default MyCardDetails;