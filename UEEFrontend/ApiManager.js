import axios from "axios";

const baseURL = "http://192.168.1.2:4000";

const ApiManager = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiManager;
