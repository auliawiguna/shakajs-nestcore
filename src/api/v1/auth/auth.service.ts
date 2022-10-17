import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService, private configService: ConfigService) {

  }

  async validateUser(username: string, password: string): Promise<any> {
    let user = await this.userService.findOne(username)
    if (user && user.password===password) {
      return user
    }
    return false
  }

  async jwtGenerate(user: any): Promise<any> {
    if (user && user.username && user.password) {
      return {        
        access_token: this.jwtService.sign(user, {
          secret: this.configService.get<string>('jwt_key'),
          expiresIn: `${this.configService.get<string>('jwt_expired')}s`
        })
      }
    }

    return false
  }
}