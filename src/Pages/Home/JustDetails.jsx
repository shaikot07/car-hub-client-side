import React, { useEffect, useState } from 'react';
import { ImStarFull } from 'react-icons/im';
import { Link, useParams } from 'react-router-dom';

const JustDetails = () => {

      const { id } = useParams()
      const [loading, setLoading] = useState(true)
      const [product, setProduct] = useState([]);
      // console.log(product);
      const {brandName, image, name, price, rating, shortDescription, type }=product

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
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default JustDetails;