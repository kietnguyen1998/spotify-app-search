import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api.spotify.com";

const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
