import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadCarsOperationsService {
  loadCars(): string {
    return 'this is load service';
  }
}
