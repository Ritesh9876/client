import axios from "axios";

const Axios =  axios.create({
  baseURL: "http://localhost:8081",
//  withCredentials: true,
});

export default Axios