import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentModule } from './assignment/assignment.module';
import { Assignment } from './assignment/entity/assignment.entity';
import { getMongoURI, database } from './config';

const mongoURI = getMongoURI();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: mongoURI,
      synchronize: true,
      useUnifiedTopology: true,
      database: database,
      entities: [Assignment],
    }),
    AssignmentModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
})
export class AppModule {}
