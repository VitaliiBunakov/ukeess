import { Controller, Get, Post, Req } from "@nestjs/common";
import { LoadCarsOperationsService } from './load-cars-operations.service';
import { Request } from "express";

@Controller('load-cars-operations')
export class LoadCarsOperationsController {
  constructor(
    private readonly loadCarsOperationService: LoadCarsOperationsService

  ) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  loadCars(@Req() request: Request): string {
    return this.loadCarsOperationService.loadCars(request);
  }
}
