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

  @Field({ nullable: true })
  concept: string;

  @Field({ nullable: true })
  link: string;

  @Field({ nullable: true })
  image_link: string;

  @Field((type) => Int)
  subject_id: number;
}

@InputType()
export class DeleteAssignmentByIdInput {
  @Field()
  id: string;
}

@InputType()
export class UpdateAssignmentByIdInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  team: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  concept: string;

  @Field({ nullable: true })
  link: string;

  @Field({ nullable: true })
  image_link: string;

  @Field({ nullable: true })
  subject_id: number;
}