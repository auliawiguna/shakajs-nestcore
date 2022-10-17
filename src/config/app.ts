export default () => ({
  jwt_key: process.env.JWT_KEY || 'sastroMeong',
  jwt_expired: process.env.JWT_EXPIRED || 86400,
})