import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Assignment')
export class AssignmentType {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  team: string;

  @Field()
  description: string;

  @Field()
  concept: string;

  @Field()
  link: string;

  @Field()
  image_link: string;

  @Field((type) => Int)
  subject_id: number;

  @Field((type) => Int)
  assignment_id: number;
}
