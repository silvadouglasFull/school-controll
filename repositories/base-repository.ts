import { createHttpClient } from "@/api/httpClient";
import { AxiosInstance } from "axios";

export abstract class BaseRepository<T, TPost> {
    protected http: AxiosInstance;
    protected url: string;
    constructor(url: string) {
        this.http = createHttpClient()
        this.url = url;
    }
    public async get(): Promise<T[]> {
        const response = await this.http.get<T[]>(`${this.url}`);
        return response.data;
    }
    public async post(payload: TPost): Promise<T> {
        const response = await this.http.post<T>(`${this.url}`, payload);
        return response.data;
    }
}
