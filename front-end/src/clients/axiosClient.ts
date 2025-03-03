import axios from "axios";

const urlApi = "http://localhost:3000/";

export const apiPdv = axios.create({
  baseURL: urlApi,
  withCredentials: true,
});
