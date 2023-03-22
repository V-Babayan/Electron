import { BASE_URL } from "../helpers";

export const makeRequest = async ({ url = "/", method = "GET", headers = {}, body }) => {
  return await fetch(BASE_URL + url, {
    method,
    headers,
    body,
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
};
