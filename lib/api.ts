export const BASE_URL = "https://prodigar-api.vercel.app/api";
import type { propsObjectCard } from "components/ObjectCard";

export async function fetchAPI(input: RequestInfo | URL, options?: any) {
  const url = BASE_URL + input;
  const newOptions: any = options || {};
  // Forma moderna -> si newOptions.headers tiene un valor dejalo como está y sinó que sea un objeto vacio.
  newOptions.headers ||= {};

  // Obtenemos el token del localStorage si lo tenemos
  const token = getSaveToken();

  if (token) {
    newOptions.headers.Authorization = `Bearer ${token}`;
  }

  newOptions.headers["Content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    return { data, status: res.status };
  } else {
    const json = await res.json();
    throw {
      message: `Hubo un error`,
      status: res.status,
      error: json,
    };
  }
}

export async function sendCodeSignUp(
  email: string,
  fullName: string,
  address: string
) {
  try {
    const data = await fetchAPI("/signup", {
      method: "POST",
      body: { email, fullName, address },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function sendCodeLogin(email: string) {
  try {
    const data = await fetchAPI("/auth/login", {
      method: "POST",
      body: { email },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function getToken(email: string, code: string) {
  const res = await fetchAPI("/auth/token", {
    method: "POST",
    body: {
      email,
      code: Number(code),
    },
  });

  // Guardamos el token que trae de la data
  saveToken(res.data.token);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getSaveToken() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth_token");
    return token;
  }
  return false;
}

export function removeToken() {
  localStorage.removeItem("auth_token");
}

export async function getMe() {
  const token = getSaveToken();
  if (token) {
    try {
      const res = await fetch(BASE_URL + "/user/profile", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}

export async function userPublishedItem() {
  try {
    const data = await fetchAPI("/user/items");
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteItem(itemProps: propsObjectCard) {
  const deleteItem = {
    ...itemProps,
    state: "DEL",
  };

  delete deleteItem.id;
  try {
    const data = await fetchAPI(`/item/update/${itemProps.id}`, {
      method: "PUT",
      body: deleteItem,
    });
    console.log(data);
    if (data) {
      location.reload();
    }
    return data;
  } catch (error) {
    return error;
  }
}

export async function searchItemsByLocation(lat: number, lng: number) {
  try {
    const data = await fetchAPI(`/search?lat=${lat}&lng=${lng}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function sendEmailContact(itemId: number, newContactData: any) {
  console.log({ newContactData });
  try {
    const data = await fetchAPI(`/contact/${itemId}`, {
      method: "POST",
      body: newContactData,
    });

    return data;
  } catch (error) {
    return error;
  }
}
