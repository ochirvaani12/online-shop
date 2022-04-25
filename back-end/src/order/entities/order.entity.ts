import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  orderId: number;

  @Column()
  userId: number;

  @Column()
  totalPrice: number;

  @Column()
  status: string;

  @Column()
  address: string;

  @Column()
  createdDatetime: Date;

  @Column()
  expireDatetime: Date;
}
