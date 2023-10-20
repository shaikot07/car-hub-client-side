import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrandDetailsCard from './BrandDetailsCard';

const BrandDetails = () => {
      const { id } = useParams()
      const [loading, setLoading] = useState(true)
      const [product, setProduct] = useState([]);
      // console.log(product);

      useEffect(() => {
            fetch('https://assignment-10-backend-side-15nojv0iz-shaikats-projects.vercel.app/product')
                  .then(res => res.json())
                  .then((data) => {
                        // console.log(data);
                        const filteredProducts = data.filter((product) => product.brandName === id);
                        // console.log('why data pai na',filteredProducts);
                        setProduct(filteredProducts)
                        setLoading(false)
                  }).catch(error => {
                        console.log(error);
                  })

      }, [])
      return (
            <div className='max-w-6xl mx-auto mb-12'>
                  <div className='mb-12'>
                        <div className="carousel h-[500px] w-full">
                              <div id="slide1" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/JrpxPVS/honda-01.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide4" className="btn btn-circle">❮</a>
                                          <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide2" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/J2V4Sws/ford-04.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide1" className="btn btn-circle">❮</a>
                                          <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide3" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/JrpxPVS/honda-01.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide2" className="btn btn-circle">❮</a>
                                          <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide4" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/MfDMHXv/honda-03.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide3" className="btn btn-circle">❮</a>
                                          <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                        </div>
                  </div>
                  
                  <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3'>
                        {
                              product.length > 0 ?  product.map((products ,ind)=> <BrandDetailsCard key={ind} products={products}></BrandDetailsCard>)
                              : <h2 className='text-4xl text-pink-600 text-center mt-10 mb-10'>Data Not Available For This Brand</h2>
                             
                        }
                  </div>

            </div>
      );
};

export default BrandDetails;