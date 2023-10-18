import React, { useEffect, useState } from 'react';

const BrandDetails = () => {
      
      const [product,setProduct]=useState([]);


      useEffect(()=>{
            fetch('http://localhost:5000/product')
                  .then(res =>res.json())
                  .then(data =>setProduct(data))
      },[])
      return (
            <div>
                  <h2>product ache: {product.length} </h2>
            </div>
      );
};

export default BrandDetails;