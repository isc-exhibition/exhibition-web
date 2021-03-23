import { INestApplication } from '@nestjs/common';
import AdminBro, { BaseResource } from 'admin-bro';
import * as AdminBroExpress from 'admin-bro-expressjs';
import { Database, Resource } from '@admin-bro/typeorm';
import { validate } from 'class-validator';
// import { getConnection } from 'typeorm';
import { Admin } from '../auth/admin.entitiy';
import { Assignment } from '../assignment/entity/assignment.entity';

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  Resource.validate = validate;

  AdminBro.registerAdapter({ Database, Resource });
  // const connection = await getConnection();

  const adminBro = new AdminBro({
    resources: [{ resource: Assignment }, { resource: Admin }],
    rootPath: '/admin',
  });

  const router = AdminBroExpress.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);
}
