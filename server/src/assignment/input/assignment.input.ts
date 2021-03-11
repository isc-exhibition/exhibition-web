import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

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
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  team: string;

  @IsNotEmpty()
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

@InputType()
export class DeleteAssignmentByIdInput {
  @Field()
  id: string;
}