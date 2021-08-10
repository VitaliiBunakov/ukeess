import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoadCarsOperationsController } from "./load-cars-operations/load-cars-operations.controller";
import { LoadCarsOperationsService } from "./load-cars-operations/load-cars-operations.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection, getConnectionOptions } from "typeorm";
import { TestconrollerController } from './testconroller/testconroller.controller';
import { Car } from "./cars/car.entity";
import { Operation } from "./operations/operation.entity";
import { CarsModule } from './cars/cars.module';
import { OperationsModule } from './operations/operations.module';
import { LoadCarsOperationsModule } from './load-cars-operations/load-cars-operations.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }),
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
