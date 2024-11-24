
import baseURL from "./baseUrl";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
})

type ApiOptions = {
  data?: object,
  method?: "get" | "post" | "put" | "delete",
  params?: object
}

const api = async (url: string, options: ApiOptions = {}) => {
  const {data, method = "get", params} = options;

  const accessToken = "ACCESS_TOKEN";

  try {
    const response = await axiosInstance.request({
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      method,
      params,
      responseType: "json",
      url
    });

    return response.data;
    
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

export default api;