export default () => ({
  jwt_key: process.env.JWT_KEY || 'sastroMeong',
  jwt_expired: process.env.JWT_EXPIRED || 86400,
  public_key: process.env.PUBLIC_KEY || 'gundamrx'
})