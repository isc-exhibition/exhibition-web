import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetAssignmentByIdInput } from '../input/assignment.input';
import { AssignmentType } from '../type/assignment.type';
import { Assignment } from '../entity/assignment.entity';
import { ObjectID } from 'mongodb';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepository: MongoRepository<Assignment>,
  ) {}

  async getAssignmentById(
    getAssignmentByIdInput: GetAssignmentByIdInput,
  ): Promise<AssignmentType> {
    const { _id } = getAssignmentByIdInput;
    const assignment = await this.assignmentRepository.findOne({
      where: { _id: new ObjectID(_id) },
    });

    if (!assignment) {
      throw new NotFoundException(`Room id ${_id} not found`);
    }

    return assignment;
  }
}
