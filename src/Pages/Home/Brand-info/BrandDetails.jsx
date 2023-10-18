import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrandDetailsCard from './BrandDetailsCard';

const BrandDetails = () => {
      const { id } = useParams()
      const [loading, setLoading] = useState(true)
      const [product, setProduct] = useState([]);
      console.log(product);

      useEffect(() => {
            fetch('http://localhost:5000/product')
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
            <div className='max-w-6xl mx-auto'>
                  <div className=''>
                        <div className="carousel h-[500px] w-full">
                              <div id="slide1" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/n0x4BF3/toyota-04.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide4" className="btn btn-circle">❮</a>
                                          <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide2" className="carousel-item relative w-full">
                                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide1" className="btn btn-circle">❮</a>
                                          <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide3" className="carousel-item relative w-full">
                                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide2" className="btn btn-circle">❮</a>
                                          <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide4" className="carousel-item relative w-full">
                                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide3" className="btn btn-circle">❮</a>
                                          <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <h2>product ache: {product.length} </h2>
                  <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3'>
                        {
                              product.map(products => <BrandDetailsCard key={products._id} products={products}></BrandDetailsCard>)
                        }
                  </div>

            </div>
      );
};

export default BrandDetails;