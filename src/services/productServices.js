import axios from 'axios';
const baseURL = 'http://localhost:3000/products';
const getAll = () => {
    return axios.get(baseURL);

}
export default {getAll};