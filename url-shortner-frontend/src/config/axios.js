import Axios from "axios";
const axios = Axios.create({
  baseURL: "http://localhost:3090",
});
export default axios;
