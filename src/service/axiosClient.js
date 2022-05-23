import axios from "axios";

const baseURL = "https://api.spotify.com";

const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
