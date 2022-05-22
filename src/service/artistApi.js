import axiosClient from "./axiosClient";

const artistApi = {
  getAll(searchValue) {
    const params = {
      q: searchValue,
      type: "artist",
    };
    return axiosClient.get("/v1/search", {
      params,
    });
  },
};

export default artistApi;
