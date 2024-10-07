import { baseUrl, headers } from "./constants";

function _handleRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function _request(url, options) {
  return fetch(url, options).then(_handleRes);
}

export function getItems() {
  return _request(`${baseUrl}/items`, {
    headers: headers,
  });
}

export function addItem({ name, link, weatherType }) {
  return _request(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: name,
      imageUrl: link,
      weather: weatherType,
    }),
  }).then((data) => {
    return data;
  });
}

export function deleteItem(card) {
  return _request(`${baseUrl}/items/${card._id}`, {
    method: "DELETE",
    headers: headers,
  });
}
