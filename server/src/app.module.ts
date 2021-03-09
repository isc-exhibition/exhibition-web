import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentModule } from './assignment/assignment.module';
import { Assignment } from './assignment/entity/assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/iscexhibition',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Assignment],
    }),
    AssignmentModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
})
export class AppModule {}
