import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class GetAssignmentByIdInput {
  @IsMongoId()
  @Field()
  _id: string;
}
