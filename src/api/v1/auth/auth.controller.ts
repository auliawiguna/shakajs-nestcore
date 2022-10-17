import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('local')
  async login(@Request() req) {
      return req.user
  }

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
}
