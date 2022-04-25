import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  catId: number;

  @Column()
  name: string;

  @Column()
  status: string;
}
