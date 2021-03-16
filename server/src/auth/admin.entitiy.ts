import {
  Entity,
  Column,
  ObjectIdColumn,
  BaseEntity,
  BeforeInsert,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['admin_id'])
export class Admin extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  admin_id: string;

  @Column()
  password: string;

  @Column()
  test: string;

  @Column()
  isAdmin: boolean;

  @Column()
  salt: string;

  @BeforeInsert()
  init() {
    this.isAdmin = false;
  }

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
