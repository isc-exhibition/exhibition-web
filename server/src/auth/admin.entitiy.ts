import { Entity, Column, ObjectIdColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Admin {
  @ObjectIdColumn()
  _id: string;

  @Column()
  admin_id: string;

  @Column()
  password: string;

  async validatePassword(password: string): Promise<boolean> {
    const salt = '$2b$10$YWeeDixLMlml2NW5BZdYuO';
    const hash = await bcrypt.hash(password, salt);
    return hash === this.password;
  }
}
