import axios from "axios";

//axios is a library, the job of axios is to fetch data from a JSON formatted rest service 
export default axios.create({
    baseURL: 'http://localhost:3000'
});