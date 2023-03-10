import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import {useState} from 'react';
import {useMatch} from 'react-router-dom';
import Cart from './components/Cart';
import RegisterForm from './components/Register';
import Profile from './components/Profile';

function App(){
  const [products,setProducts]=useState([])
  const match=useMatch('/products/:id')
  const product=match
  ?products.find(p=>p._id===match.params.id)
  :null
  return(<div>
     <Routes>
       <Route path='/' element ={<Login/>}/>
       <Route path='/register' element ={<RegisterForm/>}/>

       <Route path='/home' element={<Home products={products} setProducts={setProducts}/>}/>
       <Route path='/products/:id' element={<ProductPage product ={product}/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/Profile' element={<Profile/>}/>




      </Routes> 
    </div>)

}

export default App;
