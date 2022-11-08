import axios from "axios";
import { parseCookies } from "nookies";




    const parsedToken = parseCookies()
    const interceptAxios = axios.create()
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + parsedToken.JWTtoken 
    interceptAxios.interceptors.request.use(
        request => {
            console.log('request sent')
            request.headers!['authorization'] = 'Bearer ' + parsedToken.JWTtoken
            request.headers!['Content-Type'] = 'application/json';
            return request;
        },
        error => {
            Promise.reject(error)
        });




export default interceptAxios
