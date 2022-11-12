import { BASE_URL } from "~/helpers";

export enum RequestMetonds {
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
  POST = "POST",
  PATCH = "PATCH",
}

type MakeRequestConfigs = {
  url?: string;
  method?: RequestMetonds;
  headers?: HeadersInit;
  body?: BodyInit;
};

export const makeRequest = async <T>({
  url = "/",
  method = RequestMetonds.GET,
  headers = {},
  body,
}: MakeRequestConfigs): Promise<T> => {
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
