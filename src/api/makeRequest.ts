export enum RequestMethods {
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
  POST = "POST",
  PATCH = "PATCH",
}

type MakeRequestConfigs = {
  url?: string;
  method?: RequestMethods;
  headers?: HeadersInit;
  body?: BodyInit;
};

export const makeRequest = async <T>({
  url = "/",
  method = RequestMethods.GET,
  headers = {},
  body,
}: MakeRequestConfigs): Promise<T> | never =>
  await fetch(process.env.BASE_URL + url, {
    method,
    headers,
    body,
  })
    .then(res => res.json())
    .catch((error: string) => {
      throw new Error(error);
    });
