import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProdImage {
  @PrimaryColumn()
  prodId: number;

  @PrimaryColumn()
  image: string;

  @Column()
  isProfile: boolean;
}
