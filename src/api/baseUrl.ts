const baseUrls = {
  development: "http://localhost:5000/api/v1",
  staging: "",
  production: "",
  test: "",
}

const baseUrl = baseUrls[process.env.NODE_ENV || "development"];

export default baseUrl;
