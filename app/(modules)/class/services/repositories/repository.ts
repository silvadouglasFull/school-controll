import { Dto } from "@/app/(modules)/class/services/repositories/dto/response.dto";
import { BaseRepository } from "@/repositories/base-repository";
import { Item } from "../../components/types/item";

export class Repository extends BaseRepository<Dto, Omit<Dto, 'id'>> {
    constructor() {
        super("class");
    }
    public async getPaginated(page: number, limit: number): Promise<Item[]> {
        const response = await this.http.get<Item[]>(`${this.url}?page=${page}&limit=${limit}`);
        return response.data;
    }

    public async getById(id: string): Promise<Dto | null> {
        const response = await this.http.get<Dto>(`${this.url}/${id}`);
        return response.data;
    }
    public async create(payload: Omit<Dto, 'id'>): Promise<Dto> {
        const formData = new FormData()
        formData.append('name', payload.name)
        formData.append('shift', payload.shift)
        formData.append('schoolYear', String(payload.schoolYear))
        if (payload.image) formData.append('image', payload.image, payload.image.name)
        const response = await this.http.put<Dto>(`${this.url}`, payload);
        return response.data;
    }
    public async update(id: string, payload: Partial<Dto>): Promise<Dto> {
        const response = await this.http.put<Dto>(`${this.url}/${id}`, payload);
        return response.data;
    }

    public async delete(id: string): Promise<void> {
        await this.http.delete(`${this.url}/${id}`);
    }
}