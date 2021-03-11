import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentType } from '../type/assignment.type';
import { CreateAssignmentInput } from '../input/assignment.input';
import {
  AssignmentByIdInput,
  AssignmentListInput,
} from '../input/assignment.input';

@Resolver((of) => AssignmentType)
export class AssignmentResolver {
  constructor(private assignmentService: AssignmentService) {}

  @Query((returns) => AssignmentType)
  assignmentById(
    @Args('assignmentByIdInput') assignmentByIdInput: AssignmentByIdInput,
  ) {
    return this.assignmentService.getAssignmentById(assignmentByIdInput);
  }

  @Query((returns) => [AssignmentType])
  assignmentList(
    @Args('assignmentListInput', { nullable: true })
    assignmentListInput: AssignmentListInput,
  ) {
    return this.assignmentService.getAssignmentList(assignmentListInput);
  }

  @Mutation((returns) => AssignmentType)
  createAssignment(
    @Args('createAssignmentInput') createAssignmentInput: CreateAssignmentInput
  ) {
    return this.assignmentService.createAssignment(createAssignmentInput);
  }
}
