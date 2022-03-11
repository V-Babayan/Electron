import { BASE_URL } from "../helpers";

export const makeRequest = ({ url = "/", method = "GET", headers = {}, body }) => {
  return fetch(BASE_URL + url, {
    method,
    headers,
    body,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
