import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Home.css";
import productServices from "../services/productServices";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

function Home(  {products,setProducts}) {
  
    useEffect(() => {
      productServices.getAll().then((res) => {
        setProducts(res.data.data);
      });
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/Cart`);}

    const handleProfile = () => {
      navigate(`/Profile`);}
  
    return (
      <div className="home">
        <div className="header">
        <img src={Logo} alt="Logo"/>

          <h1>Welcome to Mero Gahana</h1>
          <div className="icons">
          <button onClick={handleClick}>
            <img
              className="cart-icon"
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              aria-label="Cart Icon"
            />
          </button>

            <button onClick={handleProfile}><img
              className="profile-icon"
              src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png"
              alt="Profile Icon"
            />
            </button>
            
          </div>
        </div>
        <div className="cover-image"></div>

        
        <div className="products">
          {products.map((product) => (
              <Product product={product} />
          ))}
        </div>
      </div>
    );
  }
  
  

export default Home;
