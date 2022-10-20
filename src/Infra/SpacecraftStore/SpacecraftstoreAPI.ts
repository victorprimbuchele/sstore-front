import axios from "axios";

const SpacecraftstoreAPI = axios.create({
  baseURL: import.meta.env.VITE_SPACECRAFT_STORE_API,
  timeout: 10000,
  headers: { "content-type": "application/json" },
});

export { SpacecraftstoreAPI };
