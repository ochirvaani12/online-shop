import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('increment')
  cartId: number;

  @Column()
  userId: number;

  @Column()
  prodId: number;

  @Column()
  count: number;

  @Column()
  catId: number;

  @Column()
  totalPrice: number;

  @Column()
  unitPrice: number;
}
