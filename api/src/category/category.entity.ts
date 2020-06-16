import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Asset } from '../asset/asset.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @OneToMany(
    type => Asset,
    asset => asset.category,
  )
  assets: Asset[];
}
