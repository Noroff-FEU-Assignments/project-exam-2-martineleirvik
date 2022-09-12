import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { baseUrl } from "../../constants/api";

const url = baseUrl;

export default function useAxios() {
  const [auth] = useContext(AuthContext);

  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    const token = auth.jwt;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
}
