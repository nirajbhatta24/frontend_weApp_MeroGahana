import axios from 'axios';
const basURL = 'http://localhost:3000/user';
 const Login = (credintails) => {
    return axios.post(`${basURL}/login`, credintails);  

}
const Register = (credintails) => {
    return axios.post(`${basURL}/`, credintails);
}


export default {Login, Register};