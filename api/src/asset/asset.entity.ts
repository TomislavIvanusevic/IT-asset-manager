import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Location } from '../location/location.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  manufacturer: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 255 })
  other_details: string;

  @ManyToOne(
    type => Location,
    location => location.assets,
    {
      eager: true,
    },
  )
  location: Location;

  @ManyToOne(
    type => Category,
    category => category.assets,
    {
      eager: true,
    },
  )
  category: Category;
}
