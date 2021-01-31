import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030/developers",
  headers: {
    "Content-type": "application/json"
  }
});