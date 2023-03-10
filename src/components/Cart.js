import React, { useState } from 'react';
import './Cart.css';

const products = [
  {
    id: 1,
    name: 'Ring',
    price: 500,
    image: 'https://www.sapphirestudiosdesign.com/wp-content/uploads/2017/09/vienna-gold-lotus-flower-ring-03.jpg',
  },
  {
    id: 2,
    name: 'Bridal Set',
    price: 300,
    image: 'https://shop.alqasimjewellers.com/wp-content/uploads/2019/11/OI000185_20191101022604375-e1594671305372.jpg',
  },
  {
    id: 3,
    name: 'Jhumka',
    price: 2000,
    image: 'https://m.media-amazon.com/images/I/61ixJbPTluL._UL1500_.jpg',
  },
];

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1 className='head'>Cart Page</h1>
      <div className='kaushal'>
        {products.map((product) => (
          <div className='krijal' key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Rs {product.price}</p>
            <button onClick={() => removeItem(product)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default CartPage;
