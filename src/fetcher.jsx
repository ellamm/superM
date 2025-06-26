const apikey = import.meta.env.VITE_API_KEY;

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function get(endpoint) {
  return fetch(BASE_URL + endpoint, {
    headers: {
      apikey,
    },
  }).then((response) => response.json());
}

export function callApi(method, endpoint, data) {
  return fetch(BASE_URL + endpoint, {
    method,
    headers: {
      apikey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
