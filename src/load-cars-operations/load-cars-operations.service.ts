import { Injectable } from '@nestjs/common';
import { CarsService } from "../cars/cars.service";
import { OperationsService } from "../operations/operations.service";
import { Connection } from "typeorm";

@Injectable()
export class LoadCarsOperationsService {



  constructor(
    private readonly carsService: CarsService,
    private readonly operationsService: OperationsService,
    private connection: Connection


  ) {}


    // @ts-ignore
  async loadCars(request):   string  {
    // console.log(request.body);
    // let foundCars: Array<string> = [];
    // let newCars: Array<string> = [];


    //woking  find  car  method!!!!!!
    // let car =  await this.carsService.findCar(request.body.id);
    //   console.log(car);
    // return JSON.stringify(car);

    //

    let result = await this.carsService.createCar(request.body);
    return JSON.stringify(result);
  }
}
