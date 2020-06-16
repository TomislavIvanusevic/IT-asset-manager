import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';
import { CreateAssetDto, UpdateAssetDto } from './dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetsRepository: Repository<Asset>,
  ) {}

  async findAll() {
    const assets = await this.assetsRepository.find();
    return assets;
  }

  async getOne(id: number): Promise<Asset> {
    return await this.assetsRepository.findOne(id);
  }

  async update(payload: UpdateAssetDto): Promise<Asset> {
    const existingAsset = await this.getOne(payload.id);

    if (!existingAsset) {
      throw new NotAcceptableException('Asset with that ID is non-existing.');
    }
    return await this.assetsRepository.save(plainToClass(Asset, payload));
  }

  async create(payload: CreateAssetDto): Promise<Asset> {
    return await this.assetsRepository.save(
      this.assetsRepository.create(payload as Record<string, any>),
    );
  }

  async delete(id: number): Promise<any> {
    const oldAsset = await this.getOne(id);

    return await this.assetsRepository.remove(oldAsset);
  }
}
