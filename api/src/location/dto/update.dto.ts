import { IsNotEmpty } from 'class-validator';

export class UpdateLocationDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
}
