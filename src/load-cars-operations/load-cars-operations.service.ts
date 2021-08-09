import { Injectable } from '@nestjs/common';
import { CarsService } from "../cars/cars.service";
import { OperationsService } from "../operations/operations.service";

@Injectable()
export class LoadCarsOperationsService {

  constructor(
    private readonly carsService: CarsService,
    private readonly operationsService: OperationsService,


  ) {}


  loadCar(): string {


    return 'this is load service';
  }
}
