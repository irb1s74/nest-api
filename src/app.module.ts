import {Module} from "@nestjs/common";
import {AppControllers} from "./app.controllers";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [AppControllers],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'irb1s',
            password: 'root',
            database: 'db_nest',
            models: [],
            autoLoadModels:true,
        }),
    ],
})
export class AppModule {
}