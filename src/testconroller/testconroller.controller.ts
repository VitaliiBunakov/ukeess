import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { CarsService } from "../cars/cars.service";


@Controller('test')
export class TestconrollerController {
  constructor(
    private readonly carsService: CarsService
  ) {  }

  @Post()
  getTested(@Req() request: Request)  {


  }
}
