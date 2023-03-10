import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';


const Product = ({ product}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product._id}`);
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image">
        <img src={product.image} alt={product.productname} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.productname}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
