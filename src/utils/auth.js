import { baseUrl } from "./constants";
import { request } from "./api";

export const register = ({ email, password, name, avatar }) => {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  });
};

export const authorize = ({ email, password }) => {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = (token) => {
  return request(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
