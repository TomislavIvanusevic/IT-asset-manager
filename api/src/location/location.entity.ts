import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Asset } from '../asset/asset.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @OneToMany(
    type => Asset,
    asset => asset.location,
  )
  assets: Asset[];
}
