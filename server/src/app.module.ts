import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentModule } from './assignment/assignment.module';
import { Assignment } from './assignment/entity/assignment.entity';
import { getMongoData } from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const { mongoURI, database } = await getMongoData();

        return {
          type: 'mongodb',
          url: mongoURI,
          database: database,
          synchronize: true,
          entities: [Assignment],
        };
      },
    }),
    AssignmentModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
})
export class AppModule {}
