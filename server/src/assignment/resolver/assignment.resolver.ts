import { Args, Query, Resolver } from '@nestjs/graphql';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentType } from '../type/assignment.type';
import { assignmentByIdInput } from '../input/assignment.input';

@Resolver((of) => AssignmentType)
export class AssignmentResolver {
  constructor(private assignmentService: AssignmentService) {}

  @Query((returns) => AssignmentType)
  assignmentById(
    @Args('assignmentByIdInput') assignmentByIdInput: AssignmentByIdInput,
  ) {
    return this.assignmentService.getAssignmentById(assignmentByIdInput);
  }
}
