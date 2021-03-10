import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentByIdInput } from '../input/assignment.input';
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
    getAssignmentByIdInput: AssignmentByIdInput,
  ): Promise<AssignmentType> {
    const { id } = getAssignmentByIdInput;

    let _id: ObjectID = null;

    try {
      _id = new ObjectID(id);
    } catch {
      throw new NotFoundException(`Assignment with id ${id} not found`);
    }

    const assignment = await this.assignmentRepository.findOne({
      where: { _id: new ObjectID(_id) },
    });

    if (!assignment) {
      throw new NotFoundException(`Assignment with id ${id} not found`);
    }

    return assignment;
  }
}
