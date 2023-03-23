import axios from "axios";
import { getTokenFromLocalStorage } from "../../utils/getTokenFromLocalStorage";

const SpacecraftstoreAPI = axios.create({
  baseURL: import.meta.env.VITE_SPACECRAFT_STORE_API,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer ",
  },
});

SpacecraftstoreAPI.interceptors.request.use(
  (config) => {
    const key = localStorage.getItem("c838d0fb656e604ef7e12074b7caa1e3");

    if (key) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${key}`,
        },
      };
    }

    return config;
  },
  undefined,
  { synchronous: true }
);

export { SpacecraftstoreAPI };
