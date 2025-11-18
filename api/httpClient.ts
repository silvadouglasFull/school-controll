import { API_URL } from "@/config/api";
import CookieManager from "@react-native-cookies/cookies";
import axios, { AxiosInstance } from "axios";
export const createHttpClient = (): AxiosInstance => {
    const client = axios.create({
        baseURL: API_URL,
        withCredentials: true,
        timeout: 10000
    });

    client.interceptors.request.use(async (config) => {
        const cookies = await CookieManager.get(API_URL);
        const cookieHeader = Object.entries(cookies)
            .map(([key, value]) => `${key}=${value.value}`)
            .join("; ");

        if (cookieHeader) {
            config.headers.Cookie = cookieHeader;
        }

        return config;
    });

    client.interceptors.response.use(async (response) => {
        const setCookie = response.headers["set-cookie"];
        if (setCookie) {
            await CookieManager.set(API_URL, {
                name: setCookie[0].split("=")[0],
                value: setCookie[0].split("=")[1],
            });
        }
        return response;
    });

    return client;
};
