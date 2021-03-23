import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentModule } from './assignment/assignment.module';
import { Assignment } from './assignment/entity/assignment.entity';
import { getMongoData } from './config';
import { AuthModule } from './auth/auth.module';
import { Admin } from './auth/admin.entitiy';

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
          entities: [Assignment, Admin],
        };
      },
    }),
    AssignmentModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    AuthModule,
  ],
})
export class AppModule {}
