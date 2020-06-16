import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto, UpdateLocationDto } from './dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationService.getOne(id);
  }

  @Put()
  update(@Body() payload: UpdateLocationDto): Promise<any> {
    return this.locationService.update(payload);
  }

  @Post()
  create(@Body() payload: CreateLocationDto): Promise<any> {
    return this.locationService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.locationService.delete(id);
  }
}
