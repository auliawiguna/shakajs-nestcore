import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.model';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService, SequelizeModule],
  imports: [SequelizeModule.forFeature([User])]
})
export class UsersModule {}
