import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (err) {
    return { error: true, err };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (err) {
    return { error: true, err };
  }
};

// secure routes

export const sendFriendInvitation = async (data) => {
  try {
    console.log("api");
    return await apiClient.post("/friendInvitation/invite", data);
  } catch (err) {
    checkResponseCode(err);
    return { error: true, err };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friendInvitation/accept", data);
  } catch (err) {
    checkResponseCode(err);
    return { error: true, err };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friendInvitation/reject", data);
  } catch (err) {
    checkResponseCode(err);
    return { error: true, err };
  }
};

const checkResponseCode = (exception) => {
  const resCode = exception?.response?.status;
  if (resCode) {
    (resCode === 401 || resCode === 403) && logout();
  }
};
