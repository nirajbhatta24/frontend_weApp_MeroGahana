import React from 'react';
import cartServices from '../services/cartServices';
import "./ProductPage.css";

function ProductPage({product}) {
    const handleaddTocart=()=>{
        cartServices.addTocart(product._id).then((res)=>{
            alert("Product added to cart")
        })  }
            
  return (
    <div className="product-container">
      <img src={product.image} alt={product.productname} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.productname}</h2>
        <h3 className="product-price">${product.price}</h3>
        <p className="product-description">{product.productdetails}</p>
        <button className="add-to-cart-button" onClick={handleaddTocart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
