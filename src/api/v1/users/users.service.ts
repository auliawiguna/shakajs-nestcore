import { Injectable } from '@nestjs/common';

export type User = any

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'test1',
      password: 'tes',
      email: 'test1@test.test',
      role: ['admin'],
    },
    {
      id: 2,
      username: 'test2',
      password: 'tes',
      email: 'test2@test.test',
      role: ['admin'],
    },
    {
      id: 3,
      username: 'test3',
      password: 'tes',
      email: 'test3@test.test',
      role: ['user'],
    },
  ]
  
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username==username)
  }
}
