import axiosClient from "./axiosClient";

const trackApi = {
  getAll(id,token) {
    const params = {
      market: "ES",
    };
    return axiosClient.get(`/v1/artists/${id}/top-tracks`, {
      params,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default trackApi;
