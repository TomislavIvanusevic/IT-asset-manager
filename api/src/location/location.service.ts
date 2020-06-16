import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { CreateLocationDto, UpdateLocationDto } from './dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async getOne(id: number): Promise<Location> {
    return await this.locationRepository.findOne(id);
  }

  async update(payload: UpdateLocationDto): Promise<Location> {
    const existingLocation = await this.getOne(payload.id);

    if (!existingLocation) {
      throw new NotAcceptableException(
        'Location with that ID is non-existing.',
      );
    }
    return await this.locationRepository.save(plainToClass(Location, payload));
  }

  async create(payload: CreateLocationDto): Promise<Location> {
    return await this.locationRepository.save(
      this.locationRepository.create(payload as Record<string, any>),
    );
  }

  async delete(id: number): Promise<any> {
    const oldLocation = await this.getOne(id);

    return await this.locationRepository.remove(oldLocation);
  }
}
