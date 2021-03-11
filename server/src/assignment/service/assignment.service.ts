import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AssignmentByIdInput,
  AssignmentListInput,
} from '../input/assignment.input';
import { AssignmentType } from '../type/assignment.type';
import { Assignment } from '../entity/assignment.entity';
import { ObjectID } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateAssignmentInput } from '../input/assignment.input';
import { create } from 'node:domain';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepository: MongoRepository<Assignment>,
  ) {}

  async getAssignmentById(
    assignmentByIdInput: AssignmentByIdInput,
  ): Promise<AssignmentType> {
    const { id } = assignmentByIdInput;

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

  async getAssignmentList(
    assignmentListInput: AssignmentListInput,
  ): Promise<AssignmentType[]> {
    if (!assignmentListInput) {
      return this.assignmentRepository.find();
    }

    const { search_word, subject_id } = assignmentListInput;

    let assignmentList: AssignmentType[] = [];

    if (subject_id) {
      assignmentList = await this.assignmentRepository.find({
        where: {
          subject_id,
        },
      });
    }

    if (search_word) {
      const searchedAssignmentList = await this.assignmentRepository.find({
        where: {
          $text: {
            $search: search_word,
          },
        },
      });

      assignmentList.push(...searchedAssignmentList);
    }

    return [...new Set(assignmentList)];
  }

  async createAssignment(createAssignmentInput: CreateAssignmentInput): Promise<AssignmentType> {
    const { name, team, description, concept, link, image_link, subject_id, assignment_id } = createAssignmentInput;

    const assignment = this.assignmentRepository.create({
      name,
      team,
      description,
      concept,
      link,
      image_link,
      subject_id,
      assignment_id,
    });

    return this.assignmentRepository.save(assignment);
  }
}
