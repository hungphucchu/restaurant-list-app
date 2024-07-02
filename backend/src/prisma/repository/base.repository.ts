import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T> {
  protected model;

  constructor(model: any) {
    this.model = model;
  }

  async update(updateData: Partial<T>): Promise<T[]> {
    return this.model.update(updateData);
  }

  async findMany(): Promise<T[]> {
    return this.model.findMany();
  }

  async findAll(searchData: Partial<T>): Promise<T[]> {
    return this.model.findMany({ where: searchData });
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create({ data });
  }

  async delete(id: string): Promise<T> {
    return this.model.delete({ where: { id: parseInt(id, 10) } });
  }

  async count(data: Partial<T>): Promise<number> {
    return this.model.count({ where: data });
  }
}
