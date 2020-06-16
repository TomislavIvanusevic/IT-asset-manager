import { IsNotEmpty } from 'class-validator';

export class CreateAssetDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  manufacturer: string;

  @IsNotEmpty()
  other_details: string;

  @IsNotEmpty()
  location: number;
}
