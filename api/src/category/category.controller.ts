import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';

@Controller('asset')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryService.getOne(id);
  }

  @Put()
  update(@Body() payload: UpdateCategoryDto): Promise<any> {
    return this.categoryService.update(payload);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto): Promise<any> {
    return this.categoryService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoryService.delete(id);
  }
}
