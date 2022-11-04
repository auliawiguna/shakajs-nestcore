import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/api/v1/users/entities/user.model";

export default () => ({
  sequelize: SequelizeModule.forRoot({
    dialect: "mysql",
    host: process.env.DB_HOST,      
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    synchronize: true,
    logging: process.env.ENV != 'production'
  }),
})