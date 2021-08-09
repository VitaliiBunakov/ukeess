import { Controller, Get, Post } from '@nestjs/common';
import { LoadCarsOperationsService } from './load-cars-operations.service';

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
  loadCars(): string {
    return this.loadCarsOperationService.loadCar();
  }
}
