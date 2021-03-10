import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AssignmentByIdInput {
  @Field()
  id: string;
}
