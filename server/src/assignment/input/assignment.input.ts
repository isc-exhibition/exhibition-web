import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AssignmentByIdInput {
  @Field()
  id: string;
}

@InputType()
export class AssignmentListInput {
  @Field({ nullable: true })
  search_word: string;

  @Field({ nullable: true })
  subject_id: number;
}

@InputType()
export class CreateAssignmentInput {
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

  @Field()
  subject_id: number;

  @Field()
  assignment_id: number;
}