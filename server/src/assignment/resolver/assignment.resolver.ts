import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentType } from '../type/assignment.type';
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
    @Args('name') name: string,
    @Args('team') team: string,
    @Args('description') description: string,
    @Args('concept') concept: string,
    @Args('link') link: string,
    @Args('image_link') image_link: string,
    @Args('subject_id') subject_id: number,
    @Args('assignment_id') assignment_id: number,

  ) {
    return this.assignmentService.createAssignment(name, team, description, concept, link, image_link, subject_id, assignment_id);
  }
}
