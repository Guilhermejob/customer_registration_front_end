import axios from "axios";

const api = axios.create({
  baseURL: "https://customer-registration-test.herokuapp.com/",
});

export default api;
