import axiosClient from "./axiosClient";

const trackApi = {
  getAll(id) {
    const params = {
      market: "ES",
    };
    return axiosClient.get(`/v1/artists/${id}/top-tracks`, {
      params,
    });
  },
};

export default trackApi;
