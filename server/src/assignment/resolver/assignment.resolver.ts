import { Args, Query, Resolver } from '@nestjs/graphql';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentType } from '../type/assignment.type';
import { GetAssignmentByIdInput } from '../input/assignment.input';

@Resolver((of) => AssignmentType)
export class AssignmentResolver {
  constructor(private assignmentService: AssignmentService) {}

  @Query((returns) => AssignmentType)
  getAssignmentById(
    @Args('getAssignmentInput') getAssignmentByIdInput: GetAssignmentByIdInput,
  ) {
    return this.assignmentService.getAssignmentById(getAssignmentByIdInput);
  }
}
