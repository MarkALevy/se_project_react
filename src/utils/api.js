import { baseUrl, headers } from "./constants";

function _handleRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function request(url, options) {
  return fetch(url, options).then(_handleRes);
}

export function getItems() {
  return request(`${baseUrl}/items`, {
    headers: headers,
  });
}

export function addItem({ name, link, weatherType }, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: link,
      weather: weatherType,
    }),
  }).then((data) => {
    return data;
  });
}

export function deleteItem(card, token) {
  return request(`${baseUrl}/items/${card._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function editUser({ name, link }, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      avatar: link,
    }),
  }).then((data) => {
    return data;
  });
}

export function addCardLike(card, token) {
  return request(`${baseUrl}/items/${card._id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function removeCardLike(card, token) {
  return request(`${baseUrl}/items/${card._id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
