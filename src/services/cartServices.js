import axios from 'axios';
const baseURL = 'http://localhost:3000';
const addTocart = (id) => {
    console.log(id);
    const qty=1;
    const userid=window.localStorage.getItem('id');
   
    return axios.post(`${baseURL}/cart/${id}/${qty}`,{userid});}

const getCart = () => {
    return axios.get(`${baseURL}/cart/${window.localStorage.getItem('id')}`);}


export default {addTocart, getCart};
