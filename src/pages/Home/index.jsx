import axios from 'axios'
import React, { useEffect } from 'react'
import './Home.css'
import { NavLink } from 'react-router'
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

const Home = () => {

  const [products, setProducts] = React.useState([]);
  const [searchStr, setSearchStr] = React.useState('');

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get('http://localhost:5000/products?search='+searchStr)
      setProducts(res.data.data);
    }
    fetchProducts();
  }, [searchStr]);

  return (
    <>
    <div className='product'>
      <div className='container product__container'>
      <input className='product__search' placeholder='search' onChange={(e) => setSearchStr(e.target.value)}/>
        <h1 className='product__title'>Products</h1>
        <div className='product__content'>
          {products.map((product) => (
            <NavLink to={'/product-details/' + product.id}>
              <div className='product__cart' data-aos='flip-left' key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.image} alt="" />
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.rating}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
