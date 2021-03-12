import { EntityRepository, Repository, SimpleConsoleLogger } from 'typeorm';
import { Admin } from './admin.entitiy';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  async validateAdminPassword(
    authCredentialsDto: AdminCredentialsDto,
  ): Promise<string> {
    const { admin_id, password } = authCredentialsDto;

    const admin = await this.findOne({ admin_id });

    if (admin && (await admin.validatePassword(password))) {
      return admin.admin_id;
    } else {
      return null;
    }
  }
}
