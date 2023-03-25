import axios from "api/axios";

// REQUEST REGISTER
export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", data);
};

// REQUEST LOGIN
export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", data);
};

// REQUEST ME
export const requestAuthFetchMe = (token) => {
  return axios.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    "Content-Type": "application/json",
  });
};

// REQUEST FRESH TOKEN
export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "Application/json",
    refreshToken: token,
  });
};
