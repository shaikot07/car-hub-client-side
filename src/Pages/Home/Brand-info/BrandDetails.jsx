import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BrandDetails = () => {
      const {id}=useParams()
      const [loading,setLoading]=useState(true)
      const [product,setProduct]=useState([]);
      // console.log(product);

      useEffect(()=>{
            fetch('http://localhost:5000/product')
                  .then(res =>res.json())
                  .then((data) =>{
                        console.log(data);
                        const filteredProducts = data.filter((product)=>product.brandName === id);
                        console.log('why data pai na',filteredProducts);
                        setProduct(filteredProducts)
                        setLoading(false)
                  }).catch(error =>{
                        console.log(error);
                  })
                  
      },[])
      return (
            <div>
                  <h2>product ache: {product.length} </h2>
                  
            </div>
      );
};

export default BrandDetails;