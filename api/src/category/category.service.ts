import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async getOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOne(id);
  }

  async update(payload: UpdateCategoryDto): Promise<Category> {
    const existingLocation = await this.getOne(payload.id);

    if (!existingLocation) {
      throw new NotAcceptableException(
        'Location with that ID is non-existing.',
      );
    }
    return await this.categoryRepository.save(plainToClass(Category, payload));
  }

  async create(payload: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.save(
      this.categoryRepository.create(payload as Record<string, any>),
    );
  }

  async delete(id: number): Promise<any> {
    const oldCategory = await this.getOne(id);

    return await this.categoryRepository.remove(oldCategory);
  }
}
