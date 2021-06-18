import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentType, EventAnswer } from '../type/assignment.type';
import {
  CreateAssignmentInput,
  DeleteAssignmentByIdInput,
  UpdateAssignmentByIdInput,
} from '../input/assignment.input';
import {
  AssignmentByIdInput,
  AssignmentListInput,
} from '../input/assignment.input';
import { UseGuards } from '@nestjs/common';
import { GQLAuthGuard } from '../../auth/guard/auth.guard';

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
  @UseGuards(GQLAuthGuard)
  createAssignment(
    @Args('createAssignmentInput') createAssignmentInput: CreateAssignmentInput,
  ) {
    return this.assignmentService.createAssignment(createAssignmentInput);
  }

  @Mutation((returns) => AssignmentType)
  @UseGuards(GQLAuthGuard)
  deleteAssignmentById(
    @Args('deleteAssignmentByIdInput')
    deleteAssignmentByIdInput: DeleteAssignmentByIdInput,
  ) {
    return this.assignmentService.deleteAssignmentById(
      deleteAssignmentByIdInput,
    );
  }

  @Mutation((returns) => AssignmentType)
  @UseGuards(GQLAuthGuard)
  UpdateAssignmentById(
    @Args('updateAssignmentByIdInput')
    updateAssignmentByIdInput: UpdateAssignmentByIdInput,
  ) {
    return this.assignmentService.updateAssignmentById(
      updateAssignmentByIdInput,
    );
  }

  @Query((returns) => EventAnswer)
  getEventLetterAnswer(@Args('letter') letter: string) {
    return this.assignmentService.getEventLetterAnswer(letter);
  }
}
