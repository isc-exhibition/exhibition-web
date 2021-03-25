import { INestApplication } from '@nestjs/common';
import AdminBro from 'admin-bro';
import * as AdminBroExpress from 'admin-bro-expressjs';
import { Database, Resource } from '@admin-bro/typeorm';
import { validate } from 'class-validator';
import { User } from '../auth/admin.entitiy';
import { Assignment } from '../assignment/entity/assignment.entity';

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  Resource.validate = validate;

  AdminBro.registerAdapter({ Database, Resource });

  const adminBro = new AdminBro({
    resources: [{ resource: Assignment }, { resource: User }],
    rootPath: '/admin',
  });

  const router = AdminBroExpress.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);
}
