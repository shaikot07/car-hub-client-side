import React, { useEffect, useState } from 'react';
import { ImStarFull } from 'react-icons/im';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const JustDetails = () => {

      const { id } = useParams()
      const [loading, setLoading] = useState(true)
      const [product, setProduct] = useState([]);
      // console.log(product);
      const { _id, brandName, image, name, price, rating, shortDescription, type } = product
      const addCart = { _id, brandName, image, name, price, rating, shortDescription, type }
      // console.log(addCart);
      useEffect(() => {
            fetch('http://localhost:5000/product')
                  .then(res => res.json())
                  .then((data) => {
                        // console.log(data);
                        const filteredProducts = data.find((product) => product._id === id);
                        // console.log('why data pai na',filteredProducts);
                        setProduct(filteredProducts)
                        setLoading(false)
                  }).catch(error => {
                        console.log(error);
                  })

      }, [])

      const handleAddToCart = () => {
            fetch(`http://localhost:5000/cart`, {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(addCart)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    title: 'success!',
                                    text: 'Add to cart Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                              })
                              setLoading(false)

                        }
                        else {
                              Swal.fire({
                                    title: 'error!',
                                    text: 'Cart do not added',
                                    icon: 'error',
                                    confirmButtonText: 'Try Agin'
                              })
                        }
                  })
      }
      return (
            <div className='mt-[100px] mb-[100px]'>


                  <div className="card card-compact w-1/2 mx-auto bg-pink-200 shadow-xl">
                        <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                              <h2 className="card-title">Car Name: {name}</h2>
                              <h2 className="card-title">Brand Name: {brandName}</h2>
                              <p className='text-blue-gray-900 font-1xl font-bold '>Rating: {rating} <span className='inline-block'><ImStarFull className='text-pink-600'></ImStarFull></span> </p>
                              <h2 className="card-title">type: {type}</h2>
                              <h2 className="card-title font-bold">Price: $ {price}</h2>
                              <p>{shortDescription}</p>
                              <div className="card-actions justify-center mt-12">
                                    <Link to="/">
                                          <button className="btn btn-primary bg-pink-500">Go to Home</button>
                                    </Link>
                                    <button onClick={handleAddToCart} className="btn btn-primary bg-pink-500">
                                          Add to Cart
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default JustDetails;