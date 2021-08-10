import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "../cars/car.entity";
import { Connection, Repository } from "typeorm";
import { Operation } from "./operation.entity";

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private  operationRepository: Repository<Operation>,
    private connection: Connection
  ) {
  }
  //
  // async findCar(id) {
  //   let result;
  //   try {
  //     let promise = await this.operationRepository.findOne(id);
  //
  //     result = await promise;
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   return result;
  // }
  //
  //
  // async createCar(car) {
  //   let res;
  //   try {
  //     console.log("*************creating Car : ****************");
  //     console.log(car);
  //     res = await this.operationRepository.save(car);
  //   } catch (err){
  //     console.log(err);
  //   }
  //   //make normal response
  //   return res;
  // }
  //




}
