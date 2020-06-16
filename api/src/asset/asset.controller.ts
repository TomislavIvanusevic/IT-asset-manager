import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AssetService } from './asset.service';
import { CreateAssetDto, UpdateAssetDto } from './dto';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  findAll() {
    return this.assetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.assetService.getOne(id);
  }

  @Put()
  update(@Body() payload: UpdateAssetDto): Promise<any> {
    return this.assetService.update(payload);
  }

  @Post()
  create(@Body() payload: CreateAssetDto): Promise<any> {
    return this.assetService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.assetService.delete(id);
  }
}
