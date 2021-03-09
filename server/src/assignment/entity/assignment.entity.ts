import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Assignment {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  team: string;

  @Column()
  description: string;

  @Column()
  concept: string;

  @Column()
  link: string;

  @Column()
  image_link: string;

  @Column()
  subject_id: number;

  @Column()
  assignment_id: number;
}
