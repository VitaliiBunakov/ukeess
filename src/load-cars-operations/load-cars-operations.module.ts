import { Module } from '@nestjs/common';
import { LoadCarsOperationsService } from "./load-cars-operations.service";
import { LoadCarsOperationsController } from "./load-cars-operations.controller";
import { OperationsModule } from "../operations/operations.module";
import { CarsModule } from "../cars/cars.module";

@Module({})
export class LoadCarsOperationsModule {
  imports:[
    OperationsModule,
    CarsModule
  ]
  controllers: [LoadCarsOperationsController]
  providers: [LoadCarsOperationsService]
}
