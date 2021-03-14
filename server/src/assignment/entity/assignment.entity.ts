import { Column, Entity, ObjectIdColumn } from 'typeorm';

// (중요!) typeorm에서 mongodb index 설정이 잘 되지 않기 때문에 mongodb에서 직접 index를 붙여 놓은 부분이 있으니 꼭 확인할 것!
@Entity()
export class Assignment {
  @ObjectIdColumn()
  _id: string;

  @Column()
  subject_id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  team: string;

  @Column()
  description: string;

  concept = '';

  @Column()
  link = '';

  @Column()
  image_link = '';
}
