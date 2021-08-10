import { Injectable } from "@nestjs/common";
import { Car } from "./car.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    private connection: Connection
  ) {
  }

  async findCar(id) {
    let result;
    try {
      let promise = await this.carsRepository.findOne(id);

      result = await promise;
    } catch (err) {
      console.log(err);
    }
    return result;
  }


  async createCar(car) {
    let res;
    try {
      console.log("*************creating Car : ****************");
      console.log(car);
      res = await this.carsRepository.save(car);
    } catch (err){
      console.log(err);
    }
    //make normal response
    return res;
  }


  updateCar() {

  }

}
