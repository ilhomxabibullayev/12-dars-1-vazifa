import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './ProductDetails.css'

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = React.useState({});

  useEffect(() => {
    async function fetchProductsDetails() {
      console.log(id);
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(res.data.data)
    }
    fetchProductsDetails();
  }, [])

  return (
    <div className='productDetails'>
      <div className='container productDetails__container'>
        <h1>ProductDetails</h1>
        <div className='productDetails__content'>
          <div className='productDetails__cart'>
            <h2>{product.name}</h2>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
