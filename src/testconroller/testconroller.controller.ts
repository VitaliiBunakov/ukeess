import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { CarsService } from "../cars/cars.service";
import {parse} from "csv"
import { Car } from "../cars/car.entity";
const fs = require('fs');
const path = require("path");


@Controller('test')
export class TestconrollerController {
  constructor(

  ) {  }

  @Post()
  getTested(@Req() request: Request)  {


  }
}
