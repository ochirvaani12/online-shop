import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryColumn()
  userId: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdDatetime: Date;

  @Column()
  modifiedDatetime: Date;
}
