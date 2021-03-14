import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

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
  @Length(0, 100)
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  team: string;

  @IsNotEmpty()
  @Length(0, 300)
  @Field()
  description: string;

  @Length(0, 200)
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

  @Length(0, 100)
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  team: string;

  @Length(0, 300)
  @Field({ nullable: true })
  description: string;

  @Length(0, 200)
  @Field({ nullable: true })
  concept: string;

  @Field({ nullable: true })
  link: string;

  @Field({ nullable: true })
  image_link: string;

  @Field({ nullable: true })
  subject_id: number;
}
