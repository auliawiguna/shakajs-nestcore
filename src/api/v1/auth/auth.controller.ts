import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { Public } from 'src/decorators/route.decorator';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('local')
  async login(@Request() req) {
    return req.user
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('jwt')
  async loginJwt(@Request() req) {
    return this.authService.jwtGenerate(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user
  }

  @Public()
  @Get('all')
  async all(@Request() req) {
    return await this.userService.findAll()
  }

}
