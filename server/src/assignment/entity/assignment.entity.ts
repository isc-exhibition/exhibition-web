import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// (중요!) typeorm에서 mongodb index 설정이 잘 되지 않기 때문에 mongodb에서 직접 index를 붙여 놓은 부분이 있으니 꼭 확인할 것!
@Entity()
export class Assignment extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn()
  @Column()
  assignment_id: number;

  @Column()
  subject_id: number;

  @Column()
  name: string;

  @Column()
  team: string;

  @Column()
  description: string;

  @Column()
  concept = '';

  @Column()
  link = '';

  @Column()
  image_link = '';
}
