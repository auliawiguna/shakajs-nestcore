import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersService } from '../users/users.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [JwtService, AuthService, LocalStrategy, UsersService, JwtStrategy],
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  exports: [AuthService, JwtService]
})
export class AuthModule {}
