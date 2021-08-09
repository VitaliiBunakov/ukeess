import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoadCarsOperationsController } from "./load-cars-operations/load-cars-operations.controller";
import { LoadCarsOperationsService } from "./load-cars-operations/load-cars-operations.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection, getConnectionOptions } from "typeorm";
import { TestconrollerController } from './testconroller/testconroller.controller';
import { LoadCarsModule } from './load-cars/load-cars.module';
import { Car } from "./Car/car.entity";
import { Operation } from "./Operation/operation.entity";
import { CarsModule } from './cars/cars.module';
import { OperationsModule } from './operations/operations.module';
import { LoadCarsOperationsModule } from './load-cars-operations/load-cars-operations.module';


@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '!Q2w3e4r5t6y',
      database: 'ukeess_test',
      entities: [
        Car,
        Operation
      ],
      synchronize: false,
      migrations: [
        'src/migration/**/*.ts'
      ]
    }
  ),
    LoadCarsModule,
    CarsModule,
    OperationsModule,
    LoadCarsOperationsModule,

  ],
  controllers: [AppController, LoadCarsOperationsController, TestconrollerController],
  providers: [AppService, LoadCarsOperationsService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
