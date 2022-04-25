import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  prodId: number;

  @Column()
  userId: number;

  @Column()
  count: number;

  @Column()
  createdDatetime: Date;

  @Column()
  catId: number;
}
