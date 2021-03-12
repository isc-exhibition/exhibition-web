import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Admin {
  @ObjectIdColumn()
  _id: string;

  @Column()
  admin_id: string;

  @Column()
  password: string;

  validatePassword(password: string) {
    return password === this.password;
  }
}
