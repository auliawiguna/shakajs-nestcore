import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy', () => {
  let strategy = JwtStrategy
  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });
});
