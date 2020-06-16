import { IsNotEmpty } from 'class-validator';

export class UpdateAssetDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  manufacturer: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  other_details: string;

  @IsNotEmpty()
  location: number;

  @IsNotEmpty()
  category: number;
}
