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
