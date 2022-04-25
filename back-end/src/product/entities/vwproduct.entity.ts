import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VwProduct {
  @PrimaryGeneratedColumn()
  prodId: number;

  @Column()
  name: string;

  @Column()
  catId: number;

  @Column()
  catName: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column()
  createdDatetime: Date;
}
