import axiosClient from "./axiosClient";

const trackApi = {
  getAll(searchValue) {
    const params = {
      q: searchValue,
      type: "track",
    };
    return axiosClient.get("/v1/search", {
      params,
    });
  },
};

export default trackApi;
