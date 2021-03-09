import { Module } from '@nestjs/common';
import { AssignmentService } from './service/assignment.service';
import { AssignmentResolver } from './resolver/assignment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from './entity/assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assignment])],
  controllers: [],
  providers: [AssignmentService, AssignmentResolver],
})
export class AssignmentModule {}
